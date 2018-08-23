(function(exports){
  function NoteListView(noteList){
    this.noteList = noteList;
  }


  NoteListView.prototype.create = function(){
    return `<ul><li><div>${this.noteList.getNotes()[0].getText()}</div></li></ul>`
  }

  exports.NoteListView = NoteListView;
})(this);