(function (exports) {
  function Controller (noteList = new NoteList, noteListView = NoteListView, singleNoteView = SingleNoteView) {
    this.noteList = noteList;
    this.noteListView = new noteListView(this.noteList);
    this.singleNoteView = singleNoteView;
    this.app = document.getElementById('app');
    this.renderNoteList();
  }

  Controller.prototype.renderNoteList = function () {
    this.app.innerHTML = this.noteListView.create();
  };
  
  Controller.prototype.renderSingleNote = function (noteId) {
    return new this.singleNoteView(this.noteList.getNotes()[noteId]).render();
  };

  Controller.prototype.addNote = function(noteText) {
    this.noteList.addNote(noteText);
  };

  exports.Controller = Controller;
})(this);

var controller = new Controller();

showNoteOnChangeUrl();
submitNoteForm();

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

function submitNoteForm() {
  document.getElementById('noteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    createNote(document.getElementById('noteText').value);
  });
};

function createNote(noteText){
  controller.addNote(noteText);
  controller.renderNoteList();
};