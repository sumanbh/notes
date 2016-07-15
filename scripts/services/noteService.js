angular.module('notesApp')
    .service('noteService', noteService);

function noteService() {

  this.noteMaker = function(newNote){
    var existingEntries = JSON.parse(localStorage.getItem('allNotes'));
    if (!existingEntries) existingEntries = [];

    existingEntries.push(newNote);
    localStorage.setItem("allNotes", JSON.stringify(existingEntries));
  };

  this.getNotes = function(){
    return JSON.parse(localStorage.getItem('allNotes'));
  };
}
