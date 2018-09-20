
function NoteListDouble () {
  this.noteList = [];
}

NoteListDouble.prototype.addNote = function(text = 'This is the text') {
  this.noteList.push(text);
}

function NoteListViewDouble (noteListDouble) {
  this.noteList = noteListDouble;
}

NoteListViewDouble.prototype.create = function () {
  return `<ul><li><div>${this.noteList[0]}</div></li></ul>`
}


NoteListDouble.prototype.getNotes = function () {
  return this.notes_array
}
var testController = new Controller(NoteListDouble, NoteListViewDouble)
testConttoller.generateHTML();
expect('Generate html', app.innerHTML).toEqual('<ul><li><div>Waka</div></li></ul>')
