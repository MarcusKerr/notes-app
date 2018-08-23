(function(exports){
  function NoteList() {
    this.notes_array = [];
  }

  NoteList.prototype.getNotes = function(){
    return this.notes_array;
  }

  NoteList.prototype.addNote =function(noteText) {
    this.notes_array.push(new Note(noteText));
  }

  exports.NoteList = NoteList;
})(this);

