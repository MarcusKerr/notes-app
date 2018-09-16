
function noteListModelDouble () {
  this.notes_array = []
}

// function noteListViewDouble () {
// }

// noteListViewDouble.prototype.create = function () {
//   return '<ul><li><div>This is the text</div></li></ul>'
// }

// noteListModelDouble.prototype.getNotes = function () {
//   return this.notes_array
// }

// noteListModelDouble.prototype.addNote = function (noteText) {
//   this.notes_arrasy.push(new Note(noteText))
// }

var contoller = new Controller(noteListModelDouble)
expect('Generate html', app.innerHTML).toEqual('<ul><li><div>This is the text</div></li></ul>')
