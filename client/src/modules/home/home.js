/**
 * Home module - Home screen
 */
angular.module('myApp')
    .controller('HomeCtrl', ['$scope',  function homeCtrl($scope) {
        $scope.pos = 0;
       /* $scope.number2 = [
            {
                videosrc:"assets/images/vp-g01.jpg",
                carouselsrc:"assets/images/vp-g01-277x156.jpg"
            },
            {
                videosrc:"assets/images/vp-g02.jpg",
                carouselsrc:"assets/images/vp-g02-277x156.jpg"
            },
            {
                videosrc:"assets/images/vp-g03.jpg",
                carouselsrc:"assets/images/vp-g03-277x156.jpg"
            },
            {
                videosrc:"assets/images/vp-g04.jpg",
                carouselsrc:"assets/images/vp-g04-277x156.jpg"
            },
            {
                videosrc:"assets/images/vp-g05.jpg",
                carouselsrc:"assets/images/vp-g05-277x156.jpg"
            },
            {
                videosrc:"assets/images/vp-g11.jpg",
                carouselsrc:"assets/images/vp-g11-277x156.jpg"
            },
            {
                videosrc:"assets/images/vp-g12.jpg",
                carouselsrc:"assets/images/vp-g12-277x156.jpg"
            },
            {
                videosrc:"assets/images/vp-g13.jpg",
                carouselsrc:"assets/images/vp-g13-277x156.jpg"
            }
        ];*/
        $scope.slickConfig2Loaded = true;
        $scope.slickConfig2 = {
            autoplay: true,
            infinite: true,
            autoplaySpeed: 3000,
            slidesToShow: 4,
            slidesToScroll: 4,
            method: {} ,
            event: {
                beforeChange: function (event, slick, currentSlide, nextSlide) {
                    console.log('before change', Math.floor((Math.random() * 10) + 100));
                }
            }
        };


        $scope.vidArr = [];
        $scope.vidArr.push({
            sources: [
                {
                    src: 'http://clips-akc.us-east-1.next.gopro.com/6d9c/media/mp4/gopro/2016/09/13/6d9c5000-13b2-4cc2-b486-72d58976e767/1473801787608/asset_1200k.mp4',
                    type: 'video/mp4'
                }
            ],
            poster: 'assets/video/demo-poster.png'
        });
        $scope.vidArr.push({
            sources: [
                {
                    src: 'http://vjs.zencdn.net/v/oceans.mp4',
                    type: 'video/mp4'
                }
            ],
            poster: 'assets/images/vp-g01.jpg'
        });
        $scope.vidArr.push({
            sources: [
                {
                    src: 'http://clips-akc.us-east-1.next.gopro.com/6d9c/media/mp4/gopro/2016/09/13/6d9c5000-13b2-4cc2-b486-72d58976e767/1473801787608/asset_1200k.mp4',
                    type: 'video/mp4'
                }
            ],
            poster: 'assets/video/demo-poster.png'
        });
        $scope.vidArr.push({
            sources: [
                {
                    src: 'http://vjs.zencdn.net/v/oceans.mp4',
                    type: 'video/mp4'
                }
            ],
            poster: 'assets/images/vp-g01.jpg'
        });
        $scope.vidArr.push({
            sources: [
                {
                    src: 'http://clips-akc.us-east-1.next.gopro.com/6d9c/media/mp4/gopro/2016/09/13/6d9c5000-13b2-4cc2-b486-72d58976e767/1473801787608/asset_1200k.mp4',
                    type: 'video/mp4'
                }
            ],
            poster: 'assets/video/demo-poster.png'
        });
        $scope.vidArr.push({
            sources: [
                {
                    src: 'http://vjs.zencdn.net/v/oceans.mp4',
                    type: 'video/mp4'
                }
            ],
            poster: 'assets/images/vp-g01.jpg'
        });
        $scope.vidArr.push({
            sources: [
                {
                    src: 'http://clips-akc.us-east-1.next.gopro.com/6d9c/media/mp4/gopro/2016/09/13/6d9c5000-13b2-4cc2-b486-72d58976e767/1473801787608/asset_1200k.mp4',
                    type: 'video/mp4'
                }
            ],
            poster: 'assets/video/demo-poster.png'
        });
        $scope.vidArr.push({
            sources: [
                {
                    src: 'http://vjs.zencdn.net/v/oceans.mp4',
                    type: 'video/mp4'
                }
            ],
            poster: 'assets/images/vp-g01.jpg'
        });


        $scope.$on('vjsVideoReady', function (e, data) {
            //data contains `id`, `vid`, `player` and `controlBar`
            //NOTE: vid is depricated, use player instead
            console.log('video id:' + data.id);
            console.log('video.js player instance:' + data.player);
            console.log('video.js controlBar instance:' + data.controlBar);
           // data.player.play();
        });

        $scope.mediaObj = $scope.vidArr[0];

        $scope.playVid = function(index){
            $scope.mediaObj = $scope.vidArr[index];
        };



  }]);
