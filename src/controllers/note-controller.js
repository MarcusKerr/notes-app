(function (exports) {
  function Controller (noteListModel) {
    this.noteListView = new NoteListView(noteListModel)
  }

  Controller.prototype.generateHTML = function () {
    var app = document.getElementById('app')
    app.innerHTML = this.noteListView.create()
  }

  exports.Controller = Controller
})(this)
