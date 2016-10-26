/**
 * Channels module - Channels screen
 */
angular.module('myApp')
    .controller('channelsCtrl', ['$scope','$timeout',  function channelsCtrl($scope,$timeout) {
        console.log("channels");
        $scope.channelsarray=[
            {
                poster: 'assets/images/weight-lifting.jpg',
                heading:'Weight Lifting'
            },
            {
                poster: 'assets/images/water-polo.JPG',
                heading:'Water Polo'
            },
            {
                poster: 'assets/images/squash.JPG',
                heading:'Squash'
            },
            {
                poster: 'assets/images/polo.jpg',
                heading:'Polo'
            },
            {
                poster: 'assets/images/ice-hockey.jpg',
                heading:'Ice Hockey'
            },
            {
                poster: 'assets/images/TT.jpg',
                heading:'Table Tennis'
            },
            {
                poster: 'assets/images/badminton.jpg',
                heading:'Badminton'
            },
            {
                poster: 'assets/images/handball.jpg',
                heading:'Handball'
            },
            {
                poster: 'assets/images/Horserace.jpg',
                heading:'Horse Racing'
            },
            {
                poster: 'assets/images/Snooker.jpg',
                heading:'Snooker'
            },
            {
                poster: 'assets/images/Billiards.jpg',
                heading:'Billiards'
            },
            {
                poster: 'assets/images/Axe_throwing.JPG',
                heading:'Axe throwing'
            },
            {
                poster: 'assets/images/Ground_fighting.jpg',
                heading:'Ground fighting'
            },
            {
                poster: 'assets/images/kickboxing.jpg',
                heading:'Kickboxing'
            },
            {
                poster: 'assets/images/FreestyleWrestling.jpg',
                heading:'Freestyle wrestling'
            },
            {
                poster: 'assets/images/Track_cycling.jpg',
                heading:'Track cycling'
            },
            {
                poster: 'assets/images/Canyoning.jpg',
                heading:'Canyoning'
            },
            {
                poster: 'assets/images/Surfing.jpg',
                heading:'Surfing'
            },
            {
                poster: 'assets/images/Snowboard.jpg',
                heading:'Snowboard'
            },
            {
                poster: 'assets/images/Skateboard.jpg',
                heading:'Skateboard'
            },
            {
                poster: 'assets/images/baseball.JPG',
                heading:'Baseball'
            },
            {
                poster: 'assets/images/Basketball.jpg',
                heading:'Basketball'
            },
            {
                poster: 'assets/images/Kyudo.jpg',
                heading:'Kyudo'
            },
            {
                poster: 'assets/images/volleyball.jpg',
                heading:'Volleyball'
            },
            {
                poster: 'assets/images/Wingsuit_flying.jpg',
                heading:'Wingsuit flying'
            },
            {
                poster: 'assets/images/weight-lifting.jpg',
                heading:'Weight Lifting 1'
            },
            {
                poster: 'assets/images/water-polo.JPG',
                heading:'Water Polo'
            },
            {
                poster: 'assets/images/squash.JPG',
                heading:'Squash'
            },
            {
                poster: 'assets/images/polo.jpg',
                heading:'Polo'
            },
            {
                poster: 'assets/images/ice-hockey.jpg',
                heading:'Ice Hockey'
            },
            {
                poster: 'assets/images/TT.jpg',
                heading:'Table Tennis'
            },
            {
                poster: 'assets/images/badminton.jpg',
                heading:'Badminton'
            },
            {
                poster: 'assets/images/handball.jpg',
                heading:'Handball'
            },
            {
                poster: 'assets/images/Horserace.jpg',
                heading:'Horse Racing'
            },
            {
                poster: 'assets/images/Snooker.jpg',
                heading:'Snooker'
            },
            {
                poster: 'assets/images/Billiards.jpg',
                heading:'Billiards'
            },
            {
                poster: 'assets/images/Axe_throwing.JPG',
                heading:'Axe throwing'
            },
            {
                poster: 'assets/images/Ground_fighting.jpg',
                heading:'Ground fighting'
            },
            {
                poster: 'assets/images/kickboxing.jpg',
                heading:'Kickboxing'
            },
            {
                poster: 'assets/images/FreestyleWrestling.jpg',
                heading:'Freestyle wrestling'
            },
            {
                poster: 'assets/images/Track_cycling.jpg',
                heading:'Track cycling'
            },
            {
                poster: 'assets/images/Canyoning.jpg',
                heading:'Canyoning'
            },
            {
                poster: 'assets/images/Surfing.jpg',
                heading:'Surfing'
            },
            {
                poster: 'assets/images/Snowboard.jpg',
                heading:'Snowboard'
            },
            {
                poster: 'assets/images/Skateboard.jpg',
                heading:'Skateboard'
            },
            {
                poster: 'assets/images/baseball.JPG',
                heading:'Baseball'
            },
            {
                poster: 'assets/images/Basketball.jpg',
                heading:'Basketball'
            },
            {
                poster: 'assets/images/Kyudo.jpg',
                heading:'Kyudo'
            },
            {
                poster: 'assets/images/volleyball.jpg',
                heading:'Volleyball'
            },
            {
                poster: 'assets/images/Wingsuit_flying.jpg',
                heading:'Wingsuit flying'
            },
            {
                poster: 'assets/images/weight-lifting.jpg',
                heading:'Weight Lifting'
            },
            {
                poster: 'assets/images/water-polo.JPG',
                heading:'Water Polo'
            },
            {
                poster: 'assets/images/squash.JPG',
                heading:'Squash'
            },
            {
                poster: 'assets/images/polo.jpg',
                heading:'Polo'
            },
            {
                poster: 'assets/images/ice-hockey.jpg',
                heading:'Ice Hockey'
            },
            {
                poster: 'assets/images/TT.jpg',
                heading:'Table Tennis'
            },
            {
                poster: 'assets/images/badminton.jpg',
                heading:'Badminton'
            },
            {
                poster: 'assets/images/handball.jpg',
                heading:'Handball'
            },
            {
                poster: 'assets/images/Horserace.jpg',
                heading:'Horse Racing'
            },
            {
                poster: 'assets/images/Snooker.jpg',
                heading:'Snooker'
            },
            {
                poster: 'assets/images/Billiards.jpg',
                heading:'Billiards'
            },
            {
                poster: 'assets/images/Axe_throwing.JPG',
                heading:'Axe throwing'
            },
            {
                poster: 'assets/images/Ground_fighting.jpg',
                heading:'Ground fighting'
            },
            {
                poster: 'assets/images/kickboxing.jpg',
                heading:'Kickboxing'
            },
            {
                poster: 'assets/images/FreestyleWrestling.jpg',
                heading:'Freestyle wrestling'
            },
            {
                poster: 'assets/images/Track_cycling.jpg',
                heading:'Track cycling'
            },
            {
                poster: 'assets/images/Canyoning.jpg',
                heading:'Canyoning'
            },
            {
                poster: 'assets/images/Surfing.jpg',
                heading:'Surfing'
            },
            {
                poster: 'assets/images/Snowboard.jpg',
                heading:'Snowboard'
            },
            {
                poster: 'assets/images/Skateboard.jpg',
                heading:'Skateboard'
            },
            {
                poster: 'assets/images/baseball.JPG',
                heading:'Baseball'
            },
            {
                poster: 'assets/images/Basketball.jpg',
                heading:'Basketball'
            },
            {
                poster: 'assets/images/Kyudo.jpg',
                heading:'Kyudo'
            },
            {
                poster: 'assets/images/volleyball.jpg',
                heading:'Volleyball'
            },
            {
                poster: 'assets/images/Wingsuit_flying.jpg',
                heading:'Wingsuit flying'
            }, {
                poster: 'assets/images/weight-lifting.jpg',
                heading:'Weight Lifting'
            },
            {
                poster: 'assets/images/water-polo.JPG',
                heading:'Water Polo'
            },
            {
                poster: 'assets/images/squash.JPG',
                heading:'Squash'
            },
            {
                poster: 'assets/images/polo.jpg',
                heading:'Polo'
            },
            {
                poster: 'assets/images/ice-hockey.jpg',
                heading:'Ice Hockey'
            },
            {
                poster: 'assets/images/TT.jpg',
                heading:'Table Tennis'
            },
            {
                poster: 'assets/images/badminton.jpg',
                heading:'Badminton'
            },
            {
                poster: 'assets/images/handball.jpg',
                heading:'Handball'
            },
            {
                poster: 'assets/images/Horserace.jpg',
                heading:'Horse Racing'
            },
            {
                poster: 'assets/images/Snooker.jpg',
                heading:'Snooker'
            },
            {
                poster: 'assets/images/Billiards.jpg',
                heading:'Billiards'
            },
            {
                poster: 'assets/images/Axe_throwing.JPG',
                heading:'Axe throwing'
            },
            {
                poster: 'assets/images/Ground_fighting.jpg',
                heading:'Ground fighting'
            },
            {
                poster: 'assets/images/kickboxing.jpg',
                heading:'Kickboxing'
            },
            {
                poster: 'assets/images/FreestyleWrestling.jpg',
                heading:'Freestyle wrestling'
            },
            {
                poster: 'assets/images/Track_cycling.jpg',
                heading:'Track cycling'
            },
            {
                poster: 'assets/images/Canyoning.jpg',
                heading:'Canyoning'
            },
            {
                poster: 'assets/images/Surfing.jpg',
                heading:'Surfing'
            },
            {
                poster: 'assets/images/Snowboard.jpg',
                heading:'Snowboard'
            },
            {
                poster: 'assets/images/Skateboard.jpg',
                heading:'Skateboard'
            },
            {
                poster: 'assets/images/baseball.JPG',
                heading:'Baseball'
            },
            {
                poster: 'assets/images/Basketball.jpg',
                heading:'Basketball'
            },
            {
                poster: 'assets/images/Kyudo.jpg',
                heading:'Kyudo'
            },
            {
                poster: 'assets/images/volleyball.jpg',
                heading:'Volleyball'
            },
            {
                poster: 'assets/images/Wingsuit_flying.jpg',
                heading:'Wingsuit flying'
            }

        ];
        $timeout(function() {
            new GridScrollFx(document.getElementById('grid'), {
                viewportFactor: 0.4
            });
        },100);
    }]);