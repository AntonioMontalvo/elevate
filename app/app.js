var ElevateApp = angular.module('Elevate', [
    // 'ui.router'
    'chart.js'
]).controller('RadarCtrl', function ($scope) {
	$scope.labels =["Addition", "Subtraction", "Patterns", "Counting", "Shapes", "Measurements"];

	$scope.data = [
		//this section is where we need to data-bind/import data from database, so we would be displaying their score, ex 5 correct, 9 correct. Will also need to change the legend. 
		[5, 9, 8, 10, 9, 10]

	$scope.options = [ {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true,
					max: 10,
					min: 0
				}
			}]
		}
	}]
	];
});


// $(document).on('click', "#next-exercise", function() {
//     // AJAX POST call to the submit route on the server. 
//     // This will take the data from the form and send it
//     // to the server. 
//     $.ajax({
//             type: "POST",
//             dataType: "json",
//             url: '/submit',
//             data: {
//                 answer: //true or false,
//                 subject: $scope.currentField.name// subject
//             }
//         })
//         // If that API call succeeds, 
//         // add the title and a delete button for the note to the page
//         .done(function(data) {
//             console.log(data);
//         });
// });



// var angular = require('angular');

// angular.module('Elevate', [
//   'ui.router',
//   'home'
// ])
//   .config(function ($stateProvider, $urlRouterProvider) {
//     $stateProvider
//       .state('elevate', {
//         url: '',
//         abstract: true
//       })
//     ;
//     $urlRouterProvider.otherwise('/');
//   });

//UI_ Router is an angular.js replacement module for ngRoute. It builds upon ngRoute's features by adding nested views and states capabilities as well a the ability to have multiple named views at any level in the state tree.
//An abstract state is a state that cannot be explicitly activated. It can hava child states.
//it is activated implicitly when one of its descendants are activated.
