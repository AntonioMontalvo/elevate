ElevateApp.controller('HomeCtrl', ['$scope', function($scope) {
	$scope.addition = {
		active: false,
		exerciseOne: true,
		exerciseTwo: false,
		exerciseThree: false
	}

	$scope.subtraction = {
		active: false,
		exerciseOne: true,
		exerciseTwo: false,
		exerciseThree: false
	}

	$scope.patterns = {
		active: false,
		exerciseOne: true,
		exerciseTwo: false,
		exerciseThree: false
	}

	$scope.counting = {
		active: false,
		exerciseOne: true,
		exerciseTwo: false,
		exerciseThree: false
	}
	$scope.shapes = {
		active: false,
		exerciseOne: true,
		exerciseTwo: false,
		exerciseThree: false
	}
	$scope.measurements = {
		active: false,
		exerciseOne: true,
		exerciseTwo: false,
		exerciseThree: false
	}

	$scope.exercises = [
		{'name': 'add 3 + 2','result': '5', 'type': 'Addition'},
		{'name': 'add 5 + 9','result': '14', 'type': 'Addition'},
		{'name': 'add 1 + 9','result': '10', 'type': 'Addition'},
		{'name': 'add 9 + 9','result': '18', 'type': 'Addition'},
		{'name': 'subtract 4 - 1','result': '3', 'type': 'Subtraction'},
		{'name': 'subtract 7 - 5','result': '2', 'type': 'Subtraction'},
		{'name': 'subtract 9 - 1','result': '8', 'type': 'Subtraction'},
		{'name': 'multiply 2 * 1','result': '2', 'type': 'Multiplication'},
		{'name': 'multiply 4 * 4','result': '16', 'type': 'Multiplication'},
		{'name': 'multiply 2 * 4','result': '8', 'type': 'Multiplication'},
		{'name': 'divide 4 / 4','result': '1', 'type': 'Division'},
		{'name': 'divide 4 / 2','result': '2', 'type': 'Division'},
		{'name': 'divide 6 / 2','result': '3', 'type': 'Division'}
	];
	$scope.areasOfKnowledge = [
		{'name': 'Addition', 'href': '/addition' , 'scope': $scope.addition},
		{'name': 'Subtraction','href': '/subtraction' , 'scope': $scope.subtraction},
		{'name': 'Patterns', 'href': '/patterns' , 'scope': $scope.patterns},
		{'name': 'Counting', 'href': '/counting' , 'scope': $scope.counting},
		{'name': 'Shapes', 'href': '/shapes' , 'scope': $scope.shapes},
		{'name': 'Measurements', 'href': '/measurements' , 'scope': $scope.measurements}
	];

$scope.currentField = null;

//-------------- GRAB THE DATA AND PASS IT TO .fieldOfKnowledge --------------//
	$scope.fieldOfKnowledge = null; //declare the property

	$scope.showFieldOfKnowledge = function (field){//the function passes the field to the .fieldOfKnowledge property
		$scope.fieldOfKnowledge = field;
		field.scope.active = true;
		if ($scope.currentField) {
			$scope.currentField.active = false;
		}
		$scope.currentField = field.scope;

	}

//----------------
	
	
//-------------- EVALUATE AND RETURN TRUE. We do this because we are using the active class in the html which needs to be either true or false ----------------//
	function verifyFieldOfKnowledge(field){
		return $scope.fieldOfKnowledge !== null && field.name === $scope.fieldOfKnowledge.name;
	}
	$scope.verifyFieldOfKnowledge = verifyFieldOfKnowledge;


//------------ STATES / VIEWS ---------------//
//this methods will be used in conjuncion with the ng-if directive to show the view or not according to true or false. This are the States.

// this functions will switch from current exercise to the next. When called in the html we'll pass it the cureent and next exercise. If trhere is no next exercise it will return. Other that that it changes the state of the current exercise from tru to false and the state of the next exercise from false to true. 

	$scope.nextAdditionExercise = function (current, next) {
		if(!next) return;
		$scope.addition[current] = false;
		$scope.addition[next] = true;
	}
	$scope.nextSubtractionExercise = function (current, next) {
		if(!next) return;
		$scope.subtraction[current] = false;
		$scope.subtraction[next] = true;
	}
	$scope.nextPatternsExercise = function (current, next) {
		if(!next) return;
		$scope.patterns[current] = false;
		$scope.patterns[next] = true;
	}
	$scope.nextCountingExercise = function (current, next) {
		if(!next) return;
		$scope.counting[current] = false;
		$scope.counting[next] = true;
	}
	$scope.nextShapesExercise = function (current, next) {
		if(!next) return;
		$scope.shapes[current] = false;
		$scope.shapes[next] = true;
	}
	$scope.nextMeasurementsExercise = function (current, next) {
		if(!next) return;
		$scope.measurements[current] = false;
		$scope.measurements[next] = true;
	}
	

// $scope.greeting = 'hello Antonio';

}]);