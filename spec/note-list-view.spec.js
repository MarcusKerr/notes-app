var noteList = new NoteList();
noteList.addNote("This is the text");
var noteListView = new NoteListView(noteList);


expect("Html string containing note text to be returned", noteListView.create()).toEqual("<ul><li><div>This is the text</div></li></ul>");