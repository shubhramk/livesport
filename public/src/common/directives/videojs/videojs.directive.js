
/**
 * @ video js
 */
angular.module("myApp").directive('vjsVid', function () {
    return {
        restrict: 'A', //This means that it will be used as an attribute and NOT as an element.
        replace:true,
        scope: {
            vjsMedia: '='
        },
        link: function (scope, element, attrs){
            var player;

            var setup = {
                'techOrder' : ['html5', 'flash'],
                'controls' : true,
                'preload' : 'auto',
                'autoplay' : false,
                'height' : attrs.height || 480,
                'width' : attrs.width || 854
            };

            var media = scope.vjsMedia || {
                "sources":[
                    {
                        src: 'http://vjs.zencdn.net/v/oceans.mp4',
                        type: 'video/mp4'
                    }
                ],
                "poster":'http://vjs.zencdn.net/v/oceans.png'

            };

            function init(){
                attrs.id = attrs.id || "videojs" + (new Date()).getTime();
                element.attr('id', attrs.id);
                player = videojs(attrs.id, setup, function(){

                    this.src(media.sources);
                    this.poster(media.poster);
                });
            }
            scope.$watchGroup(['vjsMedia'], function() {

                media = scope.vjsMedia;
                if ((player !== undefined) && (player !== null)) {
                    player.dispose();
                }
                init();
            });

            scope.$on('$destroy', function() {
                // Destroy the object if it exists
                if ((player !== undefined) && (player !== null)) {
                    player.dispose();
                }
            });
        }
    };
});