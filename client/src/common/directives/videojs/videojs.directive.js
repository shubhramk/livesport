
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

            function init(media){
                attrs.id = attrs.id || "videojs_" + (new Date()).getTime();
                console.log(attrs.id);
                element.attr('id', attrs.id);
                videojs(attrs.id, setup, function(){
                    player = this;
                    console.log(media.sources);
                    setStreams(media);
                });
            }
            function setStreams(media){
                player.src(media.sources);
                player.poster(media.poster);
                player.play();
            }
            scope.$watchGroup(['vjsMedia'], function() {

                media = scope.vjsMedia;
                console.log(media.sources);
                console.log(media.poster);
                // if ((player !== undefined) && (player !== null)) {
                //     player.dispose();
                // }
                if ((player !== undefined) && (player !== null)) {
                    setStreams(media);
                }else{
                    init(media);
                }

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