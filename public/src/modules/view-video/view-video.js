/**
 * Video display module - Video screen
 */
angular.module('myApp')
    .controller('viewvideoCtrl', ['$scope', '$timeout' ,'$state','$http', function eventCtrl($scope , $timeout,$state,$http) {
        console.log($state.current.name);
        console.log($state.params.id);

        //get Channels List

        $scope.videoHeading = ($state.current.name == 'channels.video') ? 'VIDEOS' : '';
        $scope.isChannel    = ($state.current.name == 'channels.video')? true :false;

        var ID = $state.params.id;
        var getVideoURL = '';

        if($state.current.name == 'channels.video'){ //if it comes from channel parent
           getVideoURL = '/api/getVideo/'+ID;
        }else if($state.current.name == 'events.video'){  //if it comes from video parent
            getVideoURL = '/api/getEvent/'+ID;
        }
        $http.get(getVideoURL).
            success(function(data) {

                $scope.mediaObj = data[0];
                if($state.current.name == 'channels.video') { //if it comes from channel parent
                    $scope.videoList = data;
                    $timeout(function () {
                        new GridScrollFx(document.getElementById('grid'), {
                            viewportFactor: 0.4
                        });
                    }, 100);
                }
            });

        $scope.mediaObj  = {};
        $scope.videoList = [];

        //play video
        $scope.playVideo = function(index,vidArr){
            $scope.mediaObj = vidArr[index];
            $("html, body").animate({scrollTop: $("#video-player").offset().top}, "slow");
        };

    }]);