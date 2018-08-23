// takes a nore list model upon instantiation
// has a method that wehn called reyturns a html string
// hanldes a note list model that has no notes
    // one note
    // or several notes


function NoteListView(noteList){
  this.noteList = noteList;
}
NoteListView.prototype.create = function(){
  for(var i = 0; i < this.noteList.getNotes().length; i++){
   return `${this.noteList.getNotes()[i].getText()}`;
  }
}