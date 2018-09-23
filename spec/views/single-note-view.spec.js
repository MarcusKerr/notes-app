var note1 = new Note('This is the text');
var singleNote = new SingleNoteView(note1);
expect('renders html for a single note', singleNote.render()).toEqual('<div class="singleNote"><p class="noteText">This is the text</p></div>')