var noterApp = angular.module('noterApp', []);

noterApp.controller("savedNotesController", function($scope, $http){

  var startUp = function(){
    $http.get('/findAll').then(function(response){
      $scope.notes = response.data;//needs the data part for the actual response data
      console.log(response);
    });
  };

  startUp();

});
