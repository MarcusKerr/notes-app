var noteList = new NoteList();

isEmpty("Expect NoteList to be instantiated with an empty array", noteList.getNotes);

var text = "This is a textity text text texting text";
noteList.addNote(text);
isEqualTo("Notelist contains note object with specified text", noteList.getNotes()[0].text, "This is a textity text text texting text");

