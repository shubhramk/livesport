/**
 * Events module - Events screen
 */
angular.module('myApp')
    .controller('eventCtrl', ['$scope', '$timeout' , function eventCtrl($scope , $timeout) {
        console.log("events");
        $scope.eventsarray=[
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/weight-lifting.jpg',
                heading:'Olympics Weight Lifting',
                date:'Oct 27,2016',
                category:' Weight Lifting'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/water-polo.JPG',
                heading:'Water Polo',
                date:'Oct 27,2016',
                category:'Handball'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/squash.JPG',
                heading:'Squash',
                date:'Oct 27,2016',
                category:'Racquet (or racket) sports'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/polo.jpg',
                heading:'Polo',
                date:'Oct 27,2016',
                category:'Team sports'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/ice-hockey.jpg',
                heading:'Ice Hockey',
                date:'Oct 27,2016',
                category:'Ice sports'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/TT.jpg',
                heading:'Table Tennis',
                date:'Oct 27,2016',
                category:'Racquet sports'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/badminton.jpg',
                heading:'Badminton',
                date:'Oct 27,2016',
                category:'Racquet sports'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/handball.jpg',
                heading:'Handball',
                date:'Oct 27,2016',
                category:'Team sports'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/Horserace.jpg',
                heading:'Horse Racing',
                date:'Oct 27,2016',
                category:'Equine sports'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/Snooker.jpg',
                heading:'Snooker',
                date:'Oct 27,2016',
                category:'Cue sports'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/Billiards.jpg',
                heading:'Billiards',
                date:'Oct 27,2016',
                category:'Cue sports'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/Axe_throwing.JPG',
                heading:'Axe throwing',
                date:'Oct 27,2016',
                category:'Target sports'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/Ground_fighting.jpg',
                heading:'Ground fighting',
                date:'Oct 27,2016',
                category:'Striking'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/kickboxing.jpg',
                heading:'Kickboxing',
                date:'Oct 27,2016',
                category:'Striking'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/FreestyleWrestling.jpg',
                heading:'Freestyle wrestling',
                date:'Oct 27,2016',
                category:'Striking'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/Track_cycling.jpg',
                heading:'Track cycling',
                date:'Oct 27,2016',
                category:'Bicycle'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/Canyoning.jpg',
                heading:'Canyoning',
                date:'Oct 27,2016',
                category:'Climbing'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/Surfing.jpg',
                heading:'Surfing',
                date:'Oct 27,2016',
                category:'Board sports'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/Snowboard.jpg',
                heading:'Snowboard',
                date:'Oct 27,2016',
                category:'Board sports'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/Skateboard.jpg',
                heading:'Skateboard',
                date:'Oct 27,2016',
                category:'Board sports'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/baseball.JPG',
                heading:'Baseball',
                date:'Oct 27,2016',
                category:'Bat-and-ball'
            },
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/Basketball.jpg',
                heading:'Basketball',
                date:'Oct 27,2016',
                category:'Basketball'
            }
        ];
        $timeout(function() {
            new GridScrollFx(document.getElementById('grid'), {
                viewportFactor: 0.4
            });
        },100);
        $scope.$on('vjsVideoReady', function (e, data) {
            //data contains `id`, `vid`, `player` and `controlBar`
            //NOTE: vid is depricated, use player instead
            console.log('video id:' + data.id);
            console.log('video.js player instance:' + data.player);
            console.log('video.js controlBar instance:' + data.controlBar);
            data.player.play();
        });

        $scope.mediaObj = $scope.eventsarray[0];

        $scope.playVid = function(index){

        };
    }]);