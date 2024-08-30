import Swal from "sweetalert2";
class Jumbotron extends HTMLElement {
  constructor() {
    super();

    const banner = document.createElement("banner");
    banner.innerHTML = `
            <div class="container-banner">
              <div class="image">
                <img src="img/notes.png" alt="book-img">
              </div>
              <section class="section-main" id="home">
                  <form id="input-notes">
                      <div class="input-item col">
                          <label for="titleNote">Title</label>
                          <input id="titleNote" type="text" placeholder="Add your title note" required/>
                          <span id="titleError" class="error-message"></span>
                      </div>
                      <div class="input-item col">
                          <label for="note">Your Note</label>
                          <textarea id="note" rows="10"  placeholder="Tell me, how's your day?" required></textarea>
                          <span id="contentError" class="error-message"></span>
                      </div>
                      <button id="noteSubmit" type="submit">Add Note</button>
                  </form>
              </section>
            </div>
        `;

    const style = document.createElement("style");
    style.textContent = `
        * {
            font-family: 'Poppins';
          }

        .container-banner {
            display: grid;
            grid-template-columns: 1fr 2fr; /* Dua kolom dengan lebar yang sama */
            max-width: 90%;
          }
          
          .image img {
            width: 400px; /* Lebar gambar 100% dari kontainer */
            padding: 0px 50px 0px 50px;
          }
          
          .section-main {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          #input-notes {
            background-color: #BB9CC0;
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            grid-column: span 2; 
          }
          
          .input-item {
            margin-bottom: 12px;
          }
          
          label {
            font-weight: bold;
            margin-bottom: 5px;
            padding-right: 10px;
          }
          
          input[type="text"],
          textarea {
            padding: 8px;
            border: 1px solid #5D3587;
            border-radius: 7px;
            width: 100%;
            box-sizing: border-box;
            margin-top: 5px;
            outline: none;
          }

          input[type="text"]:focus,
          textarea:focus {
            outline: 1px solid #392467;
          }
          
          button[type="submit"] {
            background-color: #5D3587;
            color: white;
            border: none;
            border-radius: 50px;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 16px;
            width: 50%;
            margin-bottom: 5px;
            justify-self: end; 
          }
          
          button[type="submit"]:hover {
            background-color: #5B0888;
          }
          
          ::placeholder {
            font-family: 'Poppins';
          }          

          @media screen and (max-width: 768px) {
            .container-banner {
                grid-template-columns: 1fr; /* Ubah menjadi satu kolom pada layar yang lebih kecil */
            }
      
            .image img {
                width: 100%; /* Lebar gambar 100% dari kontainer */
                padding: 0; /* Hapus padding */
                margin-top: 0;
            }
        
            #input-notes {
                width: 90%; /* Lebar form di layar kecil */
            }
        `;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(banner);

    const inputForm = this.shadowRoot.getElementById("input-notes");
    inputForm.addEventListener("submit", this.handleSubmit.bind(this));

    const titleInput = this.shadowRoot.getElementById("titleNote");
    const contentTextarea = this.shadowRoot.getElementById("note");

    contentTextarea.addEventListener("click", () => {
      const titleValue = titleInput.value;

      if (titleValue === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Judul harus diisi!",
        });
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const titleInput = this.shadowRoot.getElementById("titleNote");
    const contentTextarea = this.shadowRoot.getElementById("note");

    const title = titleInput.value;
    const note = contentTextarea.value;

    const notesCollection = document.querySelector("notes-collection");

    if (notesCollection) {
      notesCollection.addNote(title, note);
      // Tampilkan SweetAlert dengan pesan sukses
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Catatan berhasil ditambahkan.",
      });
    } else {
      console.error("Element 'notes-collection' not found in the DOM.");
    }

    // Reset form fields
    titleInput.value = "";
    contentTextarea.value = "";
  }
}

customElements.define("jumbotron-section", Jumbotron);
