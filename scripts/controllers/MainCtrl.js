var app = angular.module('notesApp');

app.controller('MainCtrl', MainCtrl);

function MainCtrl($scope, noteService) {

    $scope.saveNote = function(aNote){
      $scope.note = {};
      noteService.noteMaker(aNote);
      getNotes();
    };

    function getNotes(){
      $scope.notes = noteService.getNotes();
    }

    getNotes();

}
