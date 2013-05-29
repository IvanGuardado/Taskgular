var sb = angular.module('sb', []);

sb.controller('MainCtrl', function($scope){

});

sb.controller('AddCtrl', function($scope, tasks){
  $scope.showForm = function(){
    $scope.formVisible = true;
  };
  
  $scope.hideForm = function(){
    $scope.desc = '';
    $scope.formVisible = false;
  };

  $scope.add = function(){
    tasks.push({desc: $scope.desc});
    $scope.hideForm();
  }
});

sb.controller('ListCtrl', function($scope, tasks){
  $scope.tasks = tasks;
  $scope.remove = function(index){
    tasks.splice(index,1);
  }
});

sb.factory('tasks', function(){
  return [{desc:'Esto es una tarea'}, {desc: 'Y otra tarea'}];
})