/**
 * Home module - Home screen
 */
angular.module('myApp')
    .controller('HomeCtrl', ['$scope', '$interval' ,  '$location', '$anchorScroll','$http','$rootScope','localStorageService',
        function homeCtrl($scope,$interval,$location,$anchorScroll,$http,$rootScope,localStorageService) {
        $scope.pos = 0;
        $scope.tooltipIsOpen = false;

         $scope.mediaObj = {};
        //get Top Ten Videos
        $http.get('/api/getTopTenVideos').
            success(function(data) {
                console.log(data);
                $scope.topTenVideos = data;
                $scope.mediaObj = data[0];

        });
        //get TOp Videos
        $http.get('/api/getTopVideos').
        success(function(data) {
            $scope.topVideos = data;
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
        });

        //get Featured Videos
        $http.get('/api/getFeaturedVideos').
        success(function(data) {
            $scope.featuredVideos = data;
        });

        //play video
        $scope.playVideo = function(index,vidArr){
            $scope.mediaObj = vidArr[index];
            $scope.indexcounter = index;
            $("html, body").animate({scrollTop: $("#video-player").offset().top}, "slow");
        };

        //add to favorites
        $rootScope.favoriteVidArr = localStorageService.get('FAVORITES_DATA') || [];
        $scope.addToFavorite = function(obj){
            var favArr = localStorageService.get('FAVORITES_DATA') || [];
            favArr.push(obj);
            favArr = _.uniq(favArr, function(item, key) {
                return item.mediaID;
            });
            localStorageService.set('FAVORITES_DATA',favArr);
            $rootScope.favoriteVidArr = favArr;
        };
        $scope.getselected = function(id){
         var getfav = _.where($rootScope.favoriteVidArr , {mediaID:id});
            if(getfav.length>0){
                return true;
            }
            return false;
        };
        //video js player event
        $scope.$on('vjsVideoReady', function (e, data) {

            console.log('video id:' + data.id);
            console.log('video.js player instance:' + data.player);
            console.log('video.js controlBar instance:' + data.controlBar);
            data.player.play();
        });


  }]);
