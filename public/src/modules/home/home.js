/**
 * Home module - Home screen
 */
angular.module('myApp')
    .controller('HomeCtrl', ['$scope',  function homeCtrl($scope) {

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
            poster: 'http://vjs.zencdn.net/v/oceans.png'
        });



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
        };

  }]);
