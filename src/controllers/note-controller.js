(function (exports) {
  function Controller (noteList = new NoteList, noteListView = NoteListView) {
    this.noteList = noteList; 
    this.noteListView = new noteListView(this.noteList);
    this.app = document.getElementById('app');
    changeUrl();
  }

  Controller.prototype.generateNoteList = function () {
    this.app.innerHTML = this.noteListView.create();
  };

  function changeUrl() {
    window.addEventListener('hashchange', showClickedNote);
  };

  function showClickedNote() {
    showSingleNote(getNoteFromUrl(window.location))
  };

  function getNoteFromUrl(location) {
    return location.hash.split('#')[1];
  };

  function showSingleNote(note) {
    document.getElementById('app').innerHTML = note;
  };

  exports.Controller = Controller;
})(this);
