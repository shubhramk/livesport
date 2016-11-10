/**
 * Home module - Home screen
 */
angular.module('myApp')
    .controller('HomeCtrl', ['$scope', '$interval' ,  '$location', '$anchorScroll','$http','$rootScope','localStorageService','toastr',
        function homeCtrl($scope,$interval,$location,$anchorScroll,$http,$rootScope,localStorageService,toastr) {
        $scope.pos = 0;
        $scope.tooltipIsOpen = false;
        $scope.isVisible = true;
         $scope.mediaObj = {};


         var inview = new Waypoint.Inview({
             element: $('#main-video-player-detail')[0],
             enter: function(direction) {
                //$scope.smallvideo=false;
                 $("#main-vid-container").removeClass("smallvideo");
             },
             exit: function(direction) {
                 //$scope.smallvideo=true;
                 if(direction==="down") {
                     $("#main-vid-container").addClass("smallvideo");
                 }
                 else{
                     $("#main-vid-container").removeClass("smallvideo");
                 }
             }
         });
         $scope.closePopupVideo = function(){
             $("#main-vid-container").removeClass("smallvideo");
         };
        //move to top
        $scope.moveToTop = function(){
            $("#main-vid-container").removeClass("smallvideo");
            $("html, body").animate({scrollTop: $("#video-player").offset().top}, "slow");
        };
        //get Top Ten Videos
        $http.get('/api/getTopTenVideos').
            success(function(data) {
                console.log(data);
                $scope.topTenVideos = data;
                $scope.mediaObj = data[0];
                $scope.isVisible = false;

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
            var getVid = _.where(favArr,{mediaID:obj.mediaID});
            var msg    = "";

            if(getVid.length > 0){
                favArr = _.filter(favArr,function(item) {
                    return item.mediaID != obj.mediaID;
                });
                msg = 'Removed from Favorites';
            }else{
                favArr.push(obj);
                msg = 'Added to Favorites';
            }

            favArr = _.uniq(favArr, function(item, key) {
                return item.mediaID;
            });
            localStorageService.set('FAVORITES_DATA',favArr);
            $rootScope.favoriteVidArr = favArr;

            toastr.success(msg,obj.heading ,{
                timeOut: 2000,
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
                preventOpenDuplicates: true
            });
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
