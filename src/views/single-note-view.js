(function(exports){

  function SingleNote(note) {
    this.note = note;
  }

  SingleNote.prototype.render = function(){
    return `<div><p>${this.note.getText()}</p></div>`;
  }

  exports.SingleNote = SingleNote;
})(this);