var sb = angular.module('sb', ['ngResource']);

sb.controller('MainCtrl', function($scope){

});

sb.controller('AddCtrl', function($scope, $location, Task, tasks){
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
    $scope.tasks.splice(index,1);
  }
});

// CRUD API
sb.factory('Task', function($resource, mongolab, mongolabKey) {
  return $resource(
    mongolab + '/tasks/collections/tasks/:id',
    { apiKey: mongolabKey, id: '@_id.$oid' }
  );
});

sb.factory('tasks', function(Task){
  return Task.query();
});

sb.constant('mongolab', 'https://api.mongolab.com/api/1/databases');
sb.constant('mongolabKey', '509e78b5e4b0cd43415dcc43');