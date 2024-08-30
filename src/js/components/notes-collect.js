import { gsap } from "gsap";
import {
  getNotes,
  getArchivedNotes,
  addNote as addNoteAPI,
  getSingleNoteById,
  deleteNote as deleteNoteAPI,
  archiveNote,
  unarchiveNote,
} from "../api-src/api.js";

class NotesCollection extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
            * {
                font-family: 'Poppins';
            }

            .notes-collection {
                background-color: #F1EAFF;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                padding: 20px; 
            }

            .note {
                margin-left: 10px;
                margin-bottom: 20px;
                border: 1px solid #392467;
                padding: 10px;
                border-radius: 7px;
                overflow: hidden; 
                max-height: 150px; 
                display: flex; /* Menggunakan flexbox */
                flex-direction: column; /* Menentukan arah kolom */
            }
            .note h3 {
                margin: 0; 
                margin-bottom: 5px; 
            }
            
            .note p {
                margin-bottom: 10px;
                overflow: hidden;
                display: -webkit-box; /* Menentukan tata letak teks menggunakan box model */
                -webkit-box-orient: vertical; /* Mengatur orientasi box model ke vertikal */
                -webkit-line-clamp: 3; /* Mengatur jumlah maksimum baris yang akan ditampilkan */
                max-height: 54px;
            }

            .note-buttons {
                display: flex;
                margin-top: auto;
                justify-content: end;
            }

            .archive-btn {
                margin-right: 3px;
            }

            .edit-btn, .remove-btn, .archive-btn {
                border-radius: 50%;
                border: none;
                padding: 1px;
            }

            box-icon {
                padding: 3px;
                justify-content: center;
                 
            }

            #showAllNotes, #showArchivedNotes {
              padding-inline: 10px;
              border: 1px solid gray;
            }

            .filter-buttons {
              display: flex;
              justify-content: center;
              background-color: #F1EAFF;
              padding: 10px;
            }

            /* CSS untuk dialog konfirmasi */
            .custom-dialog {
                position: fixed;
                top: 50%; 
                left: 50%; 
                transform: translate(-50%, -50%);
                background-color: #D20062;
                border-radius: 15px;
                color: white;
                text-align: center;
                padding: 20px;
                z-index: 1000; 
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
                width: 250px; 
            }

            .custom-dialog p {
                margin-bottom: 10px;
            }

            .custom-dialog button {
                padding: 8px 16px;
                margin-right: 10px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-weight: 700;
            }

            .custom-dialog button:first-child {
                color: white;
            }

            .custom-dialog button:last-child {
                background-color: #ddd; 
            }

            @media screen and (max-width: 768px) {
                .notes-collection {
                    grid-template-columns: 1fr; /* Mengubah menjadi satu kolom pada layar yang lebih kecil */
                    align-items: center;
                }
            
                .note {
                    margin-left: 10px; /* Menghapus margin kiri pada layar yang lebih kecil */
                    margin-bottom: 10px; /* Mengurangi margin bawah pada layar yang lebih kecil */
                    width: 85%;
                    
                }
            
                .custom-dialog {
                    width: 70%; /* Lebar dialog diatur ulang untuk layar yang lebih kecil */ 
                    position: fixed;
                    top: 50%; 
                    left: 50%; 
                    transform: translate(-50%, -50%);
                }
            }
        `;

    const filterButtons = document.createElement("div");
    filterButtons.classList.add("filter-buttons");

    const showAllNotesButton = document.createElement("button");
    showAllNotesButton.textContent = "Semua Catatan";
    showAllNotesButton.id = "showAllNotes";

    const showArchivedNotesButton = document.createElement("button");
    showArchivedNotesButton.textContent = "Catatan Diarsipkan";
    showArchivedNotesButton.id = "showArchivedNotes";

    filterButtons.appendChild(showAllNotesButton);
    filterButtons.appendChild(showArchivedNotesButton);

    // Tambahkan event listener untuk tombol filter
    showAllNotesButton.addEventListener("click", async () => {
      await this.displayNotes(); // Menampilkan semua catatan yang belum diarsip

      showAllNotesButton.style.backgroundColor = "#5D3587";
      showAllNotesButton.style.color = "#FFFFFF";

      showArchivedNotesButton.style.backgroundColor = "#F1EAFF";
      showArchivedNotesButton.style.color = "#000000";
    });

    showArchivedNotesButton.addEventListener("click", async () => {
      await this.displayArchivedNotes(); 

      showArchivedNotesButton.style.backgroundColor = "#5D3587";
      showArchivedNotesButton.style.color = "#FFFFFF";

      showAllNotesButton.style.backgroundColor = "#F1EAFF";
      showAllNotesButton.style.color = "#000000";
    });

    shadow.appendChild(filterButtons);
    shadow.appendChild(style);

    const notesContainer = document.createElement("div");
    notesContainer.classList.add("notes-collection");

    shadow.appendChild(notesContainer);
    this.init();
  }

  resetFilterButtons() {
    const showAllNotesButton = this.shadowRoot.querySelector("#showAllNotes");
    const showArchivedNotesButton =
      this.shadowRoot.querySelector("#showArchivedNotes");

    if (showAllNotesButton && showArchivedNotesButton) {
      showAllNotesButton.style.backgroundColor = "#F1EAFF";
      showAllNotesButton.style.color = "#000000";

      showArchivedNotesButton.style.backgroundColor = "#F1EAFF";
      showArchivedNotesButton.style.color = "#000000";
    } else {
      console.error("One or both filter buttons not found.");
    }
  }

  clearNotes() {
    const notesContainer = this.shadowRoot.querySelector(".notes-collection");
    notesContainer.innerHTML = ""; 
  }

  async init() {
    try {
      let notes = await getNotes();

      if (!Array.isArray(notes)) {
        if (notes.hasOwnProperty("data")) {
          notes = notes.data;
        } else {
          notes = Array.from(notes);
        }
      }

      const notesContainer = this.shadowRoot.querySelector(".notes-collection");

      notesContainer.innerHTML = "";

      this.renderAllNotes(notes);

      const showAllNotesButton = this.shadowRoot.querySelector("#showAllNotes");
      showAllNotesButton.style.backgroundColor = "#5D3587";
      showAllNotesButton.style.color = "#FFFFFF";
    } catch (error) {
      console.error("Error:", error);
    }
  }

  renderAllNotes(notes) {
    const notesContainer = this.shadowRoot.querySelector(".notes-collection");

    notesContainer.innerHTML = "";

    notes.forEach((note) => {
      const noteElement = this.renderNote(note); 
      if (noteElement) {
        notesContainer.appendChild(noteElement);

        noteElement.addEventListener("click", (event) => {
          if (!event.target.closest(".note-buttons")) {
            this.showNotePopup(note.id);
          }
        });

        const archiveButton = noteElement.querySelector(".archive-btn");
        if (archiveButton) {
          archiveButton.innerHTML = `
            <box-icon type='solid' name='${note.archived ? "archive-out" : "archive-in"}' color='#5D3587'></box-icon>
          `;
        }
      }
    });
  }


  renderNote(note) {
    if (!note || !note.title || !note.body || !note.id) {
      console.error("Invalid note data:", note);
      return null;
    }

    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    noteElement.id = note.id;

    noteElement.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.body}</p>
        <div class="note-buttons">
            <button class="archive-btn">
                <box-icon type='solid' name='archive-in' color='#5D3587'></box-icon>
            </button>
            <button class="remove-btn">
                <box-icon type='solid' name='trash-alt' color='#5D3587'></box-icon>
            </button>
        </div>
    `;

    const backgroundColors = [
      "#FFA1F5",
      "#AD88C6",
      "#D1FFF3",
      "#ACBCFF",
      "#FFE7C1",
    ];
    const randomColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    noteElement.style.backgroundColor = randomColor;

    const removeButton = noteElement.querySelector(".remove-btn");
    const archiveButton = noteElement.querySelector(".archive-btn");

    removeButton.addEventListener("click", async () => {
      this.showDeleteConfirmationAndRemove(note.title, noteElement, note);
    });

    archiveButton.addEventListener("click", async () => {
      try {
        if (note.archived) {
          await this.unarchiveNoteAPI(note.id);
        } else {
          await this.archiveNoteAPI(note.id);
        }
      } catch (error) {
        console.error("Error toggling archive status:", error);
        alert("Failed to toggle archive status. Please try again.");
      }
    });

    return noteElement;
  }

  async displayNotes() {
    try {
      const loadingIndicator = document.querySelector("loading-indicator");
      loadingIndicator.showLoading(); 
      const response = await getNotes();
      if (
        response.hasOwnProperty("data") &&
        Array.isArray(response.data) &&
        response.data.length > 0
      ) {
        this.renderAllNotes(response.data);
        this.resetFilterButtons();
        this.allNotesButtonActive();
      } else {
        this.renderEmptyNotesMessage(); 
      }
    } catch (error) {
      console.error("Error displaying notes:", error);
    } finally {
      const loadingIndicator = document.querySelector("loading-indicator");
      loadingIndicator.hideLoading();
    }
  }

  async displayArchivedNotes() {
    try {
      const loadingIndicator = document.querySelector("loading-indicator");
      loadingIndicator.showLoading(); 

      const notesContainer = this.shadowRoot.querySelector(".notes-collection");
      await gsap.to(notesContainer.children, { opacity: 0, duration: 0.5 });

      const response = await getArchivedNotes();
      if (
        response.hasOwnProperty("data") &&
        Array.isArray(response.data) &&
        response.data.length > 0
      ) {
        this.renderAllNotes(response.data);
        this.resetFilterButtons();
        
        const showAllNotesButton =
          this.shadowRoot.querySelector("#showAllNotes");
          showAllNotesButton.style.backgroundColor = "#F1EAFF";
          showAllNotesButton.style.color = "#000000";
        
        const showArchivedNotesButton =
          this.shadowRoot.querySelector("#showArchivedNotes");
          showArchivedNotesButton.style.backgroundColor = "#5D3587";
          showArchivedNotesButton.style.color = "#FFFFFF";
      } else {
        this.renderEmptyArchiveNotesMessage(); 
      }
    } catch (error) {
      console.error("Error displaying archived notes:", error);
    } finally {
      const loadingIndicator = document.querySelector("loading-indicator");
      loadingIndicator.hideLoading();
    }
  }

  // Method untuk arsip catatan
  async archiveNoteAPI(id) {
    try {
      await archiveNote(id);
      await this.displayArchivedNotes();
    } catch (error) {
      console.error("Error archiving note:", error);
    }
  }

  async unarchiveNoteAPI(id) {
    try {
      await unarchiveNote(id);
      await this.displayNotes();
    } catch (error) {
      console.error("Error unarchiving note:", error);
    }
  }

  renderEmptyArchiveNotesMessage() {
    const notesContainer = this.shadowRoot.querySelector(".notes-collection");
    notesContainer.innerHTML = ""; 

    const emptyMessage = document.createElement("div");
    emptyMessage.textContent = "Tidak ada catatan yang diarsipkan";
    emptyMessage.style.textAlign = "center";
    emptyMessage.style.fontSize = "15px";

    notesContainer.appendChild(emptyMessage);
  }

  renderEmptyNotesMessage() {
    const notesContainer = this.shadowRoot.querySelector(".notes-collection");
    notesContainer.innerHTML = ""; 

    const emptyMessage = document.createElement("div");
    emptyMessage.textContent = "Yuk Tambahkan Catatan Barumu Disini!";
    emptyMessage.style.textAlign = "center";
    emptyMessage.style.fontSize = "15px";

    notesContainer.appendChild(emptyMessage);
  }

  allNotesButtonActive() {
    const showAllNotesButton = this.shadowRoot.querySelector("#showAllNotes");
    showAllNotesButton.style.backgroundColor = "#5D3587";
    showAllNotesButton.style.color = "#FFFFFF";

    const showArchivedNotesButton =
    this.shadowRoot.querySelector("#showArchivedNotes");
    showArchivedNotesButton.style.backgroundColor = "#F1EAFF";
    showArchivedNotesButton.style.color = "#000000";
  }

  async addNote(title, noteContent) {
    try {
      const newNoteResponse = await addNoteAPI({ title, body: noteContent });

      if (
        newNoteResponse.hasOwnProperty("data") &&
        newNoteResponse.data !== null
      ) {
        const newNote = newNoteResponse.data;

        const backgroundColors = [
          "#FFA1F5",
          "#AD88C6",
          "#D1FFF3",
          "#ACBCFF",
          "#FFE7C1",
        ];
        newNote.backgroundColor =
          backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

        const noteElement = this.renderNote(newNote); 

        const notesCollection =
          this.shadowRoot.querySelector(".notes-collection");

        gsap.from(noteElement, { opacity: 0, duration: 1, ease: "power2.out" });

        notesCollection.appendChild(noteElement);
      } else {
        console.error("Invalid note data in response:", newNoteResponse);
        alert("Gagal menambahkan catatan. Respons tidak valid dari server.");
      }
    } catch (error) {
      console.error("Error adding note:", error);
      alert("Gagal menambahkan catatan. Silakan coba lagi.");
    }
  }

  async showNotePopup(noteId) {
    try {
      const response = await getSingleNoteById(noteId);

      if (response.hasOwnProperty("data") && response.data !== null) {
        const note = response.data;

        alert(
          `ID: ${note.id}\nTitle: ${note.title}\nBody: ${note.body}\nCreated At: ${note.createdAt}\nArchived: ${note.archived}`,
        );
      } else {
        console.error("Invalid note data in response:", response);
  
        alert(
          "Gagal mendapatkan detail catatan. Respons tidak valid dari server.",
        );
      }
    } catch (error) {
      console.error("Error getting note details:", error);
      alert("Gagal mendapatkan detail catatan. Silakan coba lagi.");
    }
  }

  // method menampilkan delete confirmation
  showDeleteConfirmationAndRemove(title, noteElement, note) {
    const dialog = document.createElement("div");
    dialog.classList.add("custom-dialog");

    const message = document.createElement("p");
    message.textContent = "Apakah Anda yakin ingin menghapus catatan ini?";

    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Hapus";
    confirmButton.addEventListener("click", async () => {
      try {
        gsap.to(noteElement, {
          opacity: 0,
          duration: 2,
          ease: "power2.out",
          onComplete: async () => {
            await deleteNoteAPI(note.id);
            noteElement.remove();
          },
        });
        
        this.shadowRoot.removeChild(dialog);
      } catch (error) {
        console.error("Error deleting note:", error);
        alert("Failed to delete the note. Please try again.");
      }
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Batal";
    cancelButton.addEventListener("click", () => {
      this.shadowRoot.removeChild(dialog);
    });

    dialog.appendChild(message);
    dialog.appendChild(confirmButton);
    dialog.appendChild(cancelButton);

    this.shadowRoot.appendChild(dialog);
  }
}

customElements.define("notes-collection", NotesCollection);
export default NotesCollection;
