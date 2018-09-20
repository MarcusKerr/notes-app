(function (exports) {
  function Controller (noteList = new NoteList, noteListView = NoteListView) {
    this.noteList = noteList;
    this.noteList.addNote("Waka");
    this.noteListView = new noteListView(this.noteList);
  }

  Controller.prototype.generateHTML = function () {
    var app = document.getElementById('app');
    app.innerHTML = this.noteListView.create();
  };

  exports.Controller = Controller;
})(this);
