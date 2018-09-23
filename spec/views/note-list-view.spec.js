var noteList = new NoteList();
var text1 = "Here's 20 characters, but this is way more"; 

noteList.addNote(text1);

var noteListView = new NoteListView(noteList);

expect("Html string to contain up to first 20 characters of note", noteListView.create()).toEqual(`<ul id="noteList"><li><a href="#notes/0"><div>Here's 20 characters</div></a></li></ul>`);