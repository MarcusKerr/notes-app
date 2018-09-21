var noteList = new NoteList();
// var noteList2 = new NoteList();
// var text = "This is the text"; 
var text = "Here's 20 characters, but this is way more"; 
noteList.addNote(text);
// noteList2.addNote(text2);
var noteListView = new NoteListView(noteList);

// expect("Html string containing note text to be returned", noteListView.create()).toEqual(`<ul><li><div>${text}</div></li></ul>`);
expect("Html string to contain up to first 20 characters of note", noteListView.create()).toEqual(`<ul;><li><div>Here's 20 characters</div></li></ul>`)