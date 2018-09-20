(function (exports) {
  function Controller (noteListView = new NoteListView) {
    this.noteListView = noteListView;
  }

  Controller.prototype.generateHTML = function () {
    var app = document.getElementById('app');
    app.innerHTML = this.noteListView.create();
  }

  exports.Controller = Controller
})(this)
