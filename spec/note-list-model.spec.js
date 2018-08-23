var noteList = new NoteList();

expect("Notelist to be initialised with an empty array", noteList.getNotes()).toBeEmpty();

var text = "This is a textity text text texting text";
noteList.addNote(text);
expect("Notelist to contain a note with the specified text", noteList.getNotes()[0].getText()).toEqual("This is a textity text text texting text");
