(function (exports) {
  function NoteListView (noteList = new NoteList()) {
    this._note_list = noteList;
    this._html_string_arr = [];
  }

  NoteListView.prototype.create = function () {
    for (var i = 0; i < this._note_list.getNotes().length; i++) {
      this._html_string_arr.push(`<li><a href="#notes/${this._note_list.getNotes()[i].getId()}"><div>${this._note_list.getNotes()[i].read().substring(0,20)}</div></a></li>`);
    }
    return `<ul>${this._html_string_arr.join('')}</ul>`
  }

  exports.NoteListView = NoteListView;
})(this)
