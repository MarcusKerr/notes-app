var note = new Note("This is the text");
var noteList = new NoteList();
noteList.addNote(note);
var noteListView = new NoteListView(noteList);

//has a method that when called returns a string of HTML
isEqualTo("Expected to return html string with specified note", noteListView.create(),"<ul><li><div>This is the text</div></li></ul>");