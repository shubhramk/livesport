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
            }else if(stateName == 'channels.search' ){
                return "SUGGESTED VIDEOS";
            }else if(stateName == 'favorites.video' ){
                return "FAVORITES VIDEOS";
            }else{
                return "";
            }
        }

        function showVideoList(stateName){
            if(stateName == 'channels.video' ){
                return true;
            }else if(stateName == 'channels.search' ){
                return true;
            }else if(stateName == 'favorites.video' ){
                return true;
            }else{
                return false;
            }
        }


        var ID = $state.params.id;
        var getVideoURL = '';
        $scope.mediaObj  = {};
        $scope.videoList = [];

        if($state.current.name == 'channels.video'){ //if it comes from channel parent
           getVideoURL = '/api/getVideo/'+ID;
        }else if($state.current.name == 'channels.search'){ //if it comes from search page
            var vidID = $state.params.vID;
            getVideoURL = '/api/getSearchedVideo/'+ID+'/'+vidID;
        }else if($state.current.name == 'events.video'){  //if it comes from video parent
            getVideoURL = '/api/getEvent/'+ID;
        }
        else if($state.current.name == 'favorites.video'){  //if it comes from favorites parent

            var vID = String($state.params.vID);
            //current video
            var data = _.filter($rootScope.favoriteVidArr,function(item) {
                return item.mediaID == vID;
            });
            $scope.mediaObj = data[0];

            //video list
            var arr = _.filter($rootScope.favoriteVidArr,function(item) {
                return item.mediaID != vID;
            });

            $scope.videoList = $rootScope.favoriteVidArr;
            $timeout(function () {
                // new GridScrollFx(document.getElementById('grid'), {
                //     viewportFactor: 0.4
                // });
                $scope.mediaObj = data[0];
            }, 1000);

            console.log($scope.mediaObj);
        }

        //get videos
        $http.get(getVideoURL).
            success(function(data) {

                $scope.mediaObj = data[0];
                console.log($scope.mediaObj);
                if($state.current.name == 'channels.video' || $state.current.name == 'channels.search') { //if it comes from channel or search parent
                    $scope.videoList = data;
                    // $timeout(function () {
                    //     new GridScrollFx(document.getElementById('grid'), {
                    //         viewportFactor: 0.4
                    //     });
                    // }, 100);
                }
            });


        //play video
        $scope.playVideo = function(index,vidArr){
            $scope.mediaObj = vidArr[index];
            $("html, body").animate({scrollTop: $("#video-player").offset().top}, "slow");
        };

    }]);