(function(exports){

  function SingleNoteView(note) {
    this.note = note;
  };

  SingleNoteView.prototype.render = function(){
    return `<div class="singleNote"><p class="noteText">${this.note.read()}</p></div>`;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
