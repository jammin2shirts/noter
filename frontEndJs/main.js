var noterApp = angular.module('noterApp', []);

noterApp,controller("savedNotesController", function($scope, $http){
  $scope.notes[] = function(){
    $http.get('/findAll'.sucess(function(response){
      console.log('Found all notes!');
    }));
  };
});
