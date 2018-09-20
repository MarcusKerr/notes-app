var note1 = new Note('This is the text');
var singleNote = new SingleNote(note1);
expect('renders html for a single note', singleNote.render()).toEqual('<div><p>This is the text</p></div>')