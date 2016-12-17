ElevateApp.controller('HomeCtrl', ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {
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
    $scope.results = {
        active: false,
        exerciseOne: true
    }

    $scope.exercisesMath = [
        { 'name': '3 + 2', 'result': 5, 'type': 'Addition' },
        { 'name': '5 + 9', 'result': 14, 'type': 'Addition' },
        { 'name': '1 + 9', 'result': 10, 'type': 'Addition' }
    ];

    $scope.exercisesSubtraction = [
        { 'name': '4 - 1', 'result': 3, 'type': 'Subtraction' },
        { 'name': '7 - 5', 'result': 2, 'type': 'Subtraction' },
        { 'name': '9 - 1', 'result': 8, 'type': 'Subtraction' }
    ];

    // $scope.exercisesPatterns = [
    //     {},
    //     {},
    //     {}
    // ];

    $scope.exercisesCounting = [
        { 'result': 5 },
        { 'result': 7 },
        { 'result': 6 }
    ];

    // $scope.exercisesShapes = [
    //     {},
    //     {},
    //     {}
    // ];

    // $scope.exercisesMeasurements = [
    //     {},
    //     {},
    //     {}
    // ];



    $scope.areasOfKnowledge = [
        { 'name': 'Addition', 'href': '/addition', 'scope': $scope.addition },
        { 'name': 'Subtraction', 'href': '/subtraction', 'scope': $scope.subtraction },
        { 'name': 'Patterns', 'href': '/patterns', 'scope': $scope.patterns },
        { 'name': 'Counting', 'href': '/counting', 'scope': $scope.counting },
        { 'name': 'Shapes', 'href': '/shapes', 'scope': $scope.shapes },
        { 'name': 'Measurements', 'href': '/measurements', 'scope': $scope.measurements },
        { 'name': 'Results', 'href': '/results', 'scope': $scope.results }
    ];


    // ******************************************
    // JAKE beginning
    // ******************************************

    // $scope.mongoData = {
    //     answer: false,
    //     subject: ""
    // };

      ////////////////////////////////////////////
    //////show planets
    ////////////////////////////////////////////


    $scope.planetAddition = {active: false};
    $scope.planetSubtraction = {active: false};
    $scope.planetPatterns = {active: false};
    $scope.planetCounting = {active: false};
    $scope.planetShapes = {active: false};
    $scope.planetMeasurements = {active: false};

    var planetObj = {
        planetAddition: $scope.planetAddition,
        planetSubtraction: $scope.planetSubtraction,
        planetPatterns: $scope.planetPatterns,
        planetCounting: $scope.planetCounting,
        planetShapes: $scope.planetShapes,
        planetMeasurements: $scope.planetMeasurements,

    }


    $scope.showPlanet = function(planet) {
        // planetObj[planet].active = true;
        $timeout(function() { planetObj[planet].active = true; }, 3000);
    }


    $scope.kidChoice = null;

    $scope.parentResult = null;

    $scope.kidChoiceMath = null;
    $scope.kidChoiceSubtraction = null;

    $scope.commentToKid = null;
    $scope.goodToMoveOn = false;

    $scope.activeField = "";
    
    //$scope.mongoData = {
       // answer: $scope.goodToMoveOn,
        //subject: $scope.activeField
    //}

    $scope.mongoData = function() {

        var md = {
            answer: $scope.goodToMoveOn, //true or false,
            subject: $scope.activeField // subject
        };
        return md;
    };

    $scope.exercisesArrayIndex = 0;
    $scope.currentShape = null;
    $scope.triangleDown_question = {active: false};
    $scope.circle_question = {active: false};
    $scope.triangle_question = {active: false};
    $scope.square_question = {active: false};
    $scope.currentQuestion;

    var shapeObj = {
        circle: $scope.circle_question,
        triangleDown: $scope.triangleDown_question,
        triangle: $scope.triangle_question,
        square: $scope.square_question
    }


    $scope.showSelection = function(shape) {
        if($scope.currentQuestion) {
            $scope.currentQuestion.active = false;
        }
        shapeObj[shape].active = true;
        $scope.currentQuestion = shapeObj[shape];
    }


    $scope.myCurrentShape = function(shape) {
        $scope.currentShape = shape;
    };


    $scope.choicesFunc = function(num) {
        $scope.kidChoice = num;
        $scope.exercisesArrayIndex++;
    };


    // $scope.parentchoicesFunc = function(subject) {
    //     $scope.parentChoice = subject;
    // };

    $scope.choicesFuncMath = function(num){
        $scope.kidChoiceMath = num;
    };

    $scope.choicesFuncSubtraction = function(num){
        $scope.kidChoiceSubtraction = num;
    };




    $scope.lastQuestionNextButton = function() {
        $scope.exercisesArrayIndex = 0;
    };




    $scope.delayer = function(current, next, cb) {
        $timeout(function() {
            return cb(current, next); }, 3000);
        $timeout(function() { $scope.kidChoice = null; }, 3000);
        $timeout(function() { $scope.kidChoiceMath = null; }, 3000);
        $timeout(function() { $scope.kidChoiceSubtraction = null; }, 3000);
        $timeout(function() { $scope.commentToKid = null; }, 3000);
    };






    // $scope.testResultMath = function(kc) {
    //     if (kc === $scope.exercisesMath[$scope.exercisesArrayIndex - 1].result) {
    //         $scope.commentToKid = 'You are correct!';
    //         $scope.goodToMoveOn = true;
    //     } else {
    //         $scope.commentToKid = 'WRONG';
    //     }
    // };

    $scope.testResultMath = function(kc) {
        if (kc === 1) {
            $scope.commentToKid = 'You are correct!';
            $scope.goodToMoveOn = true;
        } else {
            $scope.commentToKid = 'WRONG';
        }
    };

    // $scope.testResultSubtraction = function(kc) {
    //     if (kc === $scope.exercisesSubtraction[$scope.exercisesArrayIndex - 1].result) {
    //         $scope.commentToKid = 'You are correct!';
    //         $scope.goodToMoveOn = true;
    //     } else {
    //         $scope.commentToKid = 'WRONG';
    //     }
    // };

    $scope.testResultSubtraction = function(kc) {
        if (kc === 1) {
            $scope.commentToKid = 'You are correct!';
            $scope.goodToMoveOn = true;
        } else {
            $scope.commentToKid = 'WRONG';
        }
    };

    $scope.testResultPatterns = function(kc) {
        if (kc === 1) {
            $scope.commentToKid = 'You are correct!';
            $scope.goodToMoveOn = true;
        } else {
            $scope.commentToKid = 'WRONG';
        }

        $timeout(function() {
            $scope.triangleDown_question.active = false;
            $scope.circle_question.active = false;
            $scope.triangle_question.active = false;
            $scope.square_question.active = false;
        }, 3000);
    };

    // $scope.testResultCounting = function(kc) {
    //     if (kc === $scope.exercisesCounting[$scope.exercisesArrayIndex - 1].result) {
    //         $scope.commentToKid = 'You are correct!';
    //         $scope.goodToMoveOn = true;
    //     } else {
    //         $scope.commentToKid = 'WRONG';
    //     }
    // };


    $scope.testResultCounting = function(kc) {
        if (kc === 1) {
            $scope.commentToKid = 'You are correct!';
            $scope.goodToMoveOn = true;
        } else {
            $scope.commentToKid = 'WRONG';
        }
    };


    $scope.testResultShapes = function(kc) {
        if (kc === 1) {
            $scope.commentToKid = 'You are correct!';
            $scope.goodToMoveOn = true;
        } else {
            $scope.commentToKid = 'WRONG';
        }
    };

    $scope.testResultMeasurements = function(kc) {
        if (kc === 1) {
            $scope.commentToKid = 'You are correct!';
            $scope.goodToMoveOn = true;
        } else {
            $scope.commentToKid = 'WRONG';
        }
    };





    // ******************************************
    // JAKE end
    // ******************************************



    // $scope.currentField = null;

    //-------------- GRAB THE DATA AND PASS IT TO .fieldOfKnowledge --------------//
    $scope.fieldOfKnowledge = null; //declare the property

    $scope.showFieldOfKnowledge = function(field) { //the function passes the field to the .fieldOfKnowledge property
        $scope.fieldOfKnowledge = field;
        field.scope.active = true;
        if ($scope.currentField) {
            $scope.currentField.active = false;
        }
        $scope.activeField = field.name;
        $scope.currentField = field.scope;

    }

    //----------------


    //-------------- EVALUATE AND RETURN TRUE. We do this because we are using the active class in the html which needs to be either true or false ----------------//
    function verifyFieldOfKnowledge(field) {
        return $scope.fieldOfKnowledge !== null && field.name === $scope.fieldOfKnowledge.name;
    }
    $scope.verifyFieldOfKnowledge = verifyFieldOfKnowledge;


    //------------ STATES / VIEWS ---------------//
    //this methods will be used in conjuncion with the ng-if directive to show the view or not according to true or false. This are the States.

    // this functions will switch from current exercise to the next. When called in the html we'll pass it the cureent and next exercise. If trhere is no next exercise it will return. Other that that it changes the state of the current exercise from tru to false and the state of the next exercise from false to true. 






    $scope.nextAdditionExercise = function(current, next) {
        if (!next) return;
        $scope.addition[current] = false;
        $scope.addition[next] = true;
    }
    $scope.nextSubtractionExercise = function(current, next) {
        if (!next) return;
        $scope.subtraction[current] = false;
        $scope.subtraction[next] = true;
    }
    $scope.nextPatternsExercise = function(current, next) {
        if (!next) return;
        $scope.patterns[current] = false;
        $scope.patterns[next] = true;
    }
    $scope.nextCountingExercise = function(current, next) {
        if (!next) return;
        $scope.counting[current] = false;
        $scope.counting[next] = true;
    }
    $scope.nextShapesExercise = function(current, next) {
        if (!next) return;
        $scope.shapes[current] = false;
        $scope.shapes[next] = true;
    }
    $scope.nextMeasurementsExercise = function(current, next) {
        if (!next) return;
        $scope.measurements[current] = false;
        $scope.measurements[next] = true;
    }


//Mongo Database

$scope.postResult = function (mongoData) {
        // This will take the data from the form and send it
        // console.log($scope.currentField)
        // to the server. 
        $http({
                method: "POST",
                dataType: "json",
                url: '/results',
                data: mongoData
            })
            // If that API call succeeds, 
            .success(function(data) {
                console.log(data);
            });
    };

$scope.getResult = function (activeField){

        $http({
                method: "GET",
                dataType: "json",
                url: '/results/' + activeField
                //data: res.json
            })
            // If that API call succeeds, 
            .success(function(data) {
                console.log(data);
               var numberCorrect = data.length;
                var percentageCorrect = (numberCorrect/3) * 100;
                console.log(percentageCorrect)
                $scope.parentResult = percentageCorrect.toFixed(2) + " percent correct";
            });  

}

}]);
