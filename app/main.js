var sb = angular.module('sb', []);

sb.controller('MainCtrl', function($scope){

});

sb.controller('AddCtrl', function($scope){
  $scope.showForm = function(){
    $scope.formVisible = true;
  };
  
  $scope.hideForm = function(){
    $scope.formVisible = false;
  };
});