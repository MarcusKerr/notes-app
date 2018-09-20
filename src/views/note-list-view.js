(function (exports) {
  function NoteListView (noteList = new NoteList()) {
    this.note_list = noteList;
    this.html_string_arr = []
  }

  NoteListView.prototype.create = function () {
    for (var i = 0; i < this.note_list.getNotes().length; i++) {
      this.html_string_arr.push(`<li><div>${this.note_list.getNotes()[i].getText()}</div></li>`)
    }
    return `<ul>${this.html_string_arr.join('')}</ul>`
  }

  exports.NoteListView = NoteListView;
})(this)
