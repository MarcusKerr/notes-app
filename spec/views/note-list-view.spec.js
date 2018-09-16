var noteList = new NoteList();
var text = "This is the text"; 
noteList.addNote(text);
var noteListView = new NoteListView(noteList);

expect("Html string containing note text to be returned", noteListView.create()).toEqual(`<ul><li><div>${text}</div></li></ul>`);