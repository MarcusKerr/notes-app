function Note() {
  this.text = "My favourite language is JavaScript";
}

Note.prototype.getText = function() {
  return this.text;
}