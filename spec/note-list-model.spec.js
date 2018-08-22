var noteList = new NoteList();

isEmpty("Expect NoteList to be instantiated with an empty array", noteList.getNotes);

// Stores an array of note models
var note = new Note();
noteList.addNote(note);
contains("Expect Note to be in the NoteList", note, noteList.getNotes());