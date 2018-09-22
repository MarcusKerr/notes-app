var noteList = new NoteList();
var text1 = "Here's 20 characters, but this is way more"; 

noteList.addNote(text1);

var noteListView = new NoteListView(noteList);

expect("Html string to contain up to first 20 characters of note", noteListView.create()).toEqual(`<ul><li><a href="#notes/0"><div>Here's 20 characters</div></a></li></ul>`);

// var text2 = "second text"; 
// noteList.addNote(text2);

// expect("Each note to have unique href", noteListView.create()).toEqual(`<ul><li><a href="#notes/0"><div>Here's 20 characters</div></a></li><li><a href="#notes/1"><div>second text</div></a></li></ul>`);