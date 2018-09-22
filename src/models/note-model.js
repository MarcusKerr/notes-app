(function(exports){
  
  function Note(text, id) {
    this._text = text;
    this._id = id;
  }

  Note.prototype.read = function() {
    return this._text;
  }

  Note.prototype.getId = function() {
    return this._id;
  }

  exports.Note = Note;
})(this);
