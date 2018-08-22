function NoteList() {
  this.notes_array = []
}

NoteList.prototype.getNotes = function(){
  return this.notes_array;
}

NoteList.prototype.addNote =function(note) {
  this.notes_array.push(note);
}