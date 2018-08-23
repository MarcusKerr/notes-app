(function(exports){
  
  function Note(text = "My favourite language is JavaScript") {
    this.text = text;
  }

  Note.prototype.getText = function() {
    return this.text;
  }

  exports.Note = Note;
})(this);
