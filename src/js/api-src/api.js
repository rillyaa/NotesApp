const baseUrl = "https://notes-api.dicoding.dev/v2";

const getNotes = async () => {
  try {
    const response = await fetch(`${baseUrl}/notes`);
    if (!response.ok) {
      throw new Error("Failed to fetch unarchived notes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const getArchivedNotes = async () => {
  try {
    const response = await fetch(`${baseUrl}/notes/archived`);
    if (!response.ok) {
      throw new Error("Failed to fetch archived notes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const addNote = async (note) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    };
    const response = await fetch(`${baseUrl}/notes`, options);

    if (!response.ok) {
      const errorData = await response.json(); // Try to get more info from the error response
      throw new Error(
        `Failed to add note: ${errorData.message || "Unknown error"}`,
      ); // Provide more specific error message
    }

    const addedNote = await response.json();
    return addedNote;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw for further handling
  }
};

const getSingleNoteById = async (noteId) => {
  try {
    const response = await fetch(`${baseUrl}/notes/${noteId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch single note");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching single note:", error);
    throw new Error("Failed to fetch single note");
  }
};

const deleteNote = async (noteId) => {
  try {
    const response = await fetch(`${baseUrl}/notes/${noteId}`, {
      method: "DELETE",
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const archiveNote = async (id) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${baseUrl}/notes/${id}/archive`, options);
    const responseJson = await response.json();
    // showResponseMessage(responseJson.message); // Anda mungkin ingin menampilkan pesan respons
    // getUnArchived(); // Tidak diperlukan karena seharusnya menampilkan catatan yang belum diarsipkan sudah dikelola oleh displayNotes
    return responseJson; // Anda mungkin ingin mengembalikan respons jika perlu
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const unarchiveNote = async (id) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${baseUrl}/notes/${id}/unarchive`, options);
    const responseJson = await response.json();
    // showResponseMessage(responseJson.message); // Anda mungkin ingin menampilkan pesan respons
    // getArchived(); // Tidak diperlukan karena seharusnya menampilkan catatan yang diarsipkan sudah dikelola oleh displayArchivedNotes
    return responseJson; // Anda mungkin ingin mengembalikan respons jika perlu
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export {
  getNotes,
  getArchivedNotes,
  addNote,
  deleteNote,
  getSingleNoteById,
  archiveNote,
  unarchiveNote,
};
