(function(exports){
  function NoteList(note_class = Note) {
    this.notes_array = [];
    this.note_class = note_class;
  }

  NoteList.prototype.getNotes = function(){
    return this.notes_array;
  }

  NoteList.prototype.addNote =function(noteText) {
    this.notes_array.push(new this.note_class(noteText));
  }

  exports.NoteList = NoteList;
})(this);

