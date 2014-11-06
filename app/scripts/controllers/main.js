'use strict';

angular.module('mytodoApp')
  // populate items
  .controller('MainCtrl', ['$scope', function ($scope) {
  	$scope.todos = ['Mondady', 'Tuesday', 'Wednesday', 'Thuresday', 'Friday'];
  	// add items
  	$scope.addTodo = function (){
  		$scope.todos.push($scope.todo);
  		$scope.todo = '';
  	};
  	// remove item
  	$scope.removeTodo = function(index){
			$scope.todos.splice(index, 1);
  	};
  }]);
