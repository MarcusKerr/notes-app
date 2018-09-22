var noteList = new NoteList();

var text = "This is a textity text text texting text";
noteList.addNote(text);
expect("Notelist to contain a note with the specified text", noteList.getNotes()[0].read()).toEqual("This is a textity text text texting text");
