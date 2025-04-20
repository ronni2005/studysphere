const noteTitle = document.getElementById("noteTitle");
const noteText = document.getElementById("noteText");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesArea = document.getElementById("notesArea");
const noteList = document.getElementById("noteList");

let notes = [];

function renderNotes() {
  notesArea.innerHTML = "";
  noteList.innerHTML = "";

  notes.forEach((note, index) => {
    // Sidebar
    const listItem = document.createElement("li");
    listItem.textContent = note.title || `Note ${index + 1}`;
    listItem.onclick = () => scrollToNote(index);
    noteList.appendChild(listItem);

    // Main Note
    const noteCard = document.createElement("div");
    noteCard.className = "note-card";
    noteCard.innerHTML = `
      <input type="text" value="${note.title}" onchange="editNoteTitle(${index}, this.value)" />
      <textarea onchange="editNoteText(${index}, this.value)">${note.content}</textarea>
      <button class="delete-btn" onclick="deleteNote(${index})">❌</button>
    `;
    notesArea.appendChild(noteCard);
  });
}

function addNote() {
  const title = noteTitle.value.trim();
  const content = noteText.value.trim();
  if (content === "") {
    alert("Please type something!");
    return;
  }

  notes.push({ title, content });
  noteTitle.value = "";
  noteText.value = "";
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  renderNotes();
}

function editNoteText(index, newText) {
  notes[index].content = newText;
}

function editNoteTitle(index, newTitle) {
  notes[index].title = newTitle;
  renderNotes(); // Update sidebar titles too
}

function scrollToNote(index) {
  const noteCards = document.querySelectorAll(".note-card");
  if (noteCards[index]) {
    noteCards[index].scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

addNoteBtn.addEventListener("click", addNote);
renderNotes();
