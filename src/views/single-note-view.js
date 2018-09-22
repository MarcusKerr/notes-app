(function(exports){

  function SingleNoteView(note) {
    this.note = note;
  };

  SingleNoteView.prototype.render = function(){
    return `<div><p>${this.note.read()}</p></div>`;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
