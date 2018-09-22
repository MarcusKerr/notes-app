(function(exports){
  function NoteList(note_class = Note) {
    this._note_class = note_class;
    this._notes_array = [];
  }

  NoteList.prototype.getNotes = function(){
    return this._notes_array;
  }

  NoteList.prototype.addNote =function(noteText, id = this._notes_array.length) {
    this._notes_array.push(new this._note_class(noteText, id));
  }

  exports.NoteList = NoteList;
})(this);

