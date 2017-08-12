var noterApp = angular.module('noterApp', []);

noterApp.controller("savedNotesController", function($scope, $http){

  var startUp = function(){
    $http.get('/findAll').then(function(response){
      $scope.notes = response.data;//needs the data part for the actual response data
      ///console.log(response);
    });
  };

  startUp();

 $scope.saveNote = {};
 $scope.reset = function(){
   $scope.newNote = angular.copy($scope.saveNote);
 };

 //Save function adds new note to db
 //refreshes the page to display updated data
 //reset inputs fields to blank state
 $scope.save = function(newNote){
   //$scope.saveNote = angular.copy(newNote);
   $http.post('/saveNote', newNote).then(function(response){
     console.log(response.data);
   });
   startUp();
   $scope.reset();
 };

 $scope.update = function(updateNote, note){
   console.log("attempting update")
   updateNote._id = note._id;
   console.log(updateNote);
   $http.put('/updateNote', updateNote).then(function(success){
     console.log(success.data);
   });
   startUp();
   $scope.reset();
 };



});
