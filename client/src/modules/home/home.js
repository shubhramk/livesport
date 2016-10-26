/**
 * Home module - Home screen
 */
angular.module('myApp')
    .controller('HomeCtrl', ['$scope', '$interval' ,  '$location', '$anchorScroll', function homeCtrl($scope,$interval,$location,$anchorScroll) {
        $scope.pos = 0;
        $scope.slickConfig2Loaded = true;
        $scope.indexcounter = 0 ;
        $scope.slickConfig2 = {
            autoplay: true,
            infinite: true,
            autoplaySpeed: 4000,
            slidesToShow: 4,
            slidesToScroll: 4,
            method: {} ,
            event: {
                beforeChange: function (event, slick, currentSlide, nextSlide) {
                    $scope.indexcounter = nextSlide;
                }
            }
        };
        $scope.vidArr = [
            {
                sources: [
                    {
                        src: 'http://clips-akc.us-east-1.next.gopro.com/6d9c/media/mp4/gopro/2016/09/13/6d9c5000-13b2-4cc2-b486-72d58976e767/1473801787608/asset_1200k.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/video/demo-poster.png',
                heading:'Darkness World',
                content:'Action Drama'
            },
            {
                sources: [
                    {
                        src: 'http://vjs.zencdn.net/v/oceans.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/images/vp-g01.jpg',
                heading:'The Forest',
                content:'Action Drama'
            },{
                sources: [
                    {
                        src: 'http://clips-akc.us-east-1.next.gopro.com/6d9c/media/mp4/gopro/2016/09/13/6d9c5000-13b2-4cc2-b486-72d58976e767/1473801787608/asset_1200k.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/video/demo-poster.png',
                heading:'Dead Men',
                content:'Action Drama'
            },
            {
                sources: [
                    {
                        src: 'http://vjs.zencdn.net/v/oceans.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/images/vp-g01.jpg',
                heading:'Justice League',
                content:'Action Drama'
            },
            {
                sources: [
                    {
                        src: 'http://vjs.zencdn.net/v/oceans.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/images/vp-g01.jpg',
                heading:'The Forest',
                content:'Action Drama'
            },
            {
                sources: [
                    {
                        src: 'http://clips-akc.us-east-1.next.gopro.com/6d9c/media/mp4/gopro/2016/09/13/6d9c5000-13b2-4cc2-b486-72d58976e767/1473801787608/asset_1200k.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/video/demo-poster.png',
                heading:'Justice League',
                content:'Action Drama'
            }
        ];

        $scope.$on('vjsVideoReady', function (e, data) {
            //data contains `id`, `vid`, `player` and `controlBar`
            //NOTE: vid is depricated, use player instead
            console.log('video id:' + data.id);
            console.log('video.js player instance:' + data.player);
            console.log('video.js controlBar instance:' + data.controlBar);
            data.player.play();
        });

        $scope.mediaObj = $scope.vidArr[0];

        $scope.playVid = function(index){
            $scope.mediaObj = $scope.vidArr[index];
            $scope.indexcounter = index;
            $location.hash('video-player');
            // call $anchorScroll()
            $anchorScroll();
        };
       /* $interval(function(){
            if( $scope.indexcounter > $scope.vidArr.length){
                $scope.indexcounter = 0;
            }
            $scope.playVid( $scope.indexcounter);
            $scope.indexcounter++;
        },6000);*/


  }]);
