var ElevateApp = angular.module('Elevate', [
    // 'ui.router'
]);


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
