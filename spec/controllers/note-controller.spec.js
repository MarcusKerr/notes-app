
function NoteListDouble () {
  this.notes_array = ['123'];
}

NoteListDouble.prototype.getNotes = function () {
  return this.notes_array;
}

NoteListDouble.prototype.addNote = function(text = 'This is the text') {
  this.notes_aryra.push(text);
}

function NoteListViewDouble (noteListDouble = NoteListDouble) {
  this.noteList = noteListDouble;
}

NoteListViewDouble.prototype.create = function () {
  return `<ul><li><div>${this.noteList[0]}</div></li></ul>`
}

var testController = new Controller(NoteListDouble, NoteListViewDouble)
testController.generateNoteList();
expect('Generate note list', app.innerHTML).toEqual('<ul><li><a><div>123</div></a></li></ul>')
