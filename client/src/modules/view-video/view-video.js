/**
 * Video display module - Video screen
 */
angular.module('myApp')
    .controller('viewvideoCtrl', ['$scope', '$timeout' ,'$state','$http','$rootScope',
        function eventCtrl($scope , $timeout,$state,$http,$rootScope) {

        //get Channels List

        $scope.videoHeading = getHeading($state.current.name);
        $scope.isChannel    = showVideoList($state.current.name);

        function getHeading(stateName){
            if(stateName == 'channels.video' ){
                return "VIDEOS";
            }else if(stateName == 'favorites.video' ){
                return "FAVORITES VIDEOS";
            }else{
                return "";
            }
        }

        function showVideoList(stateName){
            if(stateName == 'channels.video' ){
                return true;
            }else if(stateName == 'favorites.video' ){
                return true;
            }else{
                return false;
            }
        }


        var ID = $state.params.id;
        var getVideoURL = '';

        if($state.current.name == 'channels.video'){ //if it comes from channel parent
           getVideoURL = '/api/getVideo/'+ID;
        }else if($state.current.name == 'events.video'){  //if it comes from video parent
            getVideoURL = '/api/getEvent/'+ID;
        }
        else if($state.current.name == 'favorites.video'){  //if it comes from favorites parent
            var vID = String($state.params.vID);
            console.log(vID);
            var arr = _.filter($rootScope.favoriteVidArr,function(item) {
                return item.mediaID != vID
            });
            console.log(arr);
            $scope.videoList = arr;
            $timeout(function () {
                new GridScrollFx(document.getElementById('grid'), {
                    viewportFactor: 0.4
                });
            }, 100);
        }

        //get videos
        $http.get(getVideoURL).
            success(function(data) {

                $scope.mediaObj = data[0];
                if($state.current.name == 'channels.video') { //if it comes from channel parent
                    $scope.videoList = data;
                    $timeout(function () {
                        new GridScrollFx(document.getElementById('grid'), {
                            viewportFactor: 0.4
                        });
                    }, 100)
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