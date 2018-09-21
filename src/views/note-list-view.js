(function (exports) {
  function NoteListView (noteList = new NoteList()) {
    this.note_list = noteList;
    this.html_string_arr = []
  }

  NoteListView.prototype.create = function () {
    for (var i = 0; i < this.note_list.getNotes().length; i++) {
      this.html_string_arr.push(`<li><a href="#${this.note_list.getNotes()[i].id}"><div>${this.note_list.getNotes()[i].getText().substring(0,20)}</div></a></li>`)
    }
    return `<ul>${this.html_string_arr.join('')}</ul>`
  }

  exports.NoteListView = NoteListView;
})(this)
