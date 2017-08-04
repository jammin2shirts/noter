var noterApp = angular.module('noterApp', []);

noterApp.controller("savedNotesController", function($scope, $http){

  var startUp = function(){
    $http.get('/findAll').then(function(response){
      $scope.notes = response.data;//needs the data part for the actual response data
      console.log(response);
    });
  };

  startUp();

 $scope.saveNote = {};
 $scope.update = function(newNote){
   //$scope.saveNote = angular.copy(newNote);
   $http.post('/saveNote', newNote).then(function(response){
     console.log(response.data);
     startUp();
   });
 };
$scope.reset = function(){
  $scope.newNote = angular.copy($scope.saveNote);
};


});
