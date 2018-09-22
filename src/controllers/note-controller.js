(function (exports) {
  function Controller (noteList = NoteList, noteListView = NoteListView, singleNoteView = SingleNoteView) {
    this.noteList = noteList;
    this.noteListView = new noteListView(this.noteList);
    this.singleNoteView = singleNoteView;
    this.app = document.getElementById('app');
  }

  Controller.prototype.renderNoteList = function () {
    this.app.innerHTML = this.noteListView.create();
  };
  
  Controller.prototype.renderSingleNote = function (noteId) {
    return new this.singleNoteView(this.noteList.getNotes()[noteId]).render();
  }

  exports.Controller = Controller;
})(this);

var noteList = new NoteList();
noteList.addNote("This is the first note");
noteList.addNote("This is the second not and this one has loads of text");
noteList.addNote("Third note");
var controller = new Controller(noteList);
controller.renderNoteList();

showNoteOnChangeUrl();

function showNoteOnChangeUrl() {
  window.addEventListener('hashchange', showClickedNote);
};

function showClickedNote() {
  showSingleNote(getNoteFromUrl(window.location));
};

function getNoteFromUrl(location) {
  return location.hash.split("#notes/")[1];
};

function showSingleNote(noteId) {
  document
    .getElementById('app')
    .innerHTML = controller.renderSingleNote(noteId) ;
};