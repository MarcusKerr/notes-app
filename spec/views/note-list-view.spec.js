var noteList = new NoteList();
var text = "Here's 20 characters, but this is way more"; 

noteList.addNote(text);

var noteListView = new NoteListView(noteList);

expect("Html string to contain up to first 20 characters of note", noteListView.create()).toEqual(`<ul><li><div>Here's 20 characters</div></li></ul>`)