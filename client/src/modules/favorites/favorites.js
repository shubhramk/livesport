/**
 * Favorites module - Favorites screen
 */
angular.module('myApp')
    .controller('favCtrl', ['$scope',  function favCtrl($scope) {

        $scope.vidArr = [
            {
                sources: [
                    {
                        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/vp-g01.jpg',
                heading:'Justice League',
                content:'Action Drama - HLS (VOD)'
            },
            {
                sources: [
                    {
                        src: 'http://clips-akc.us-east-1.next.gopro.com/6d9c/media/mp4/gopro/2016/09/13/6d9c5000-13b2-4cc2-b486-72d58976e767/1473801787608/asset_1200k.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/video/demo-poster.png',
                heading:'Darkness World -MP4',
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
                content:'Action Drama - MP4'
            },{
                sources: [
                    {
                        src: 'rtmp://10.193.67.78/live/livestream',
                        type: "rtmp/mp4"
                    }
                ],
                poster: 'assets/video/demo-poster.png',
                heading:'Dead Men',
                content:'Action Drama - LIVE'
            },

            {
                sources: [
                    {
                        src: "http://cdn3.viblast.com/streams/hls/airshow/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ],
                poster: 'assets/images/vp-g01.jpg',
                heading:'The Forest',
                content:'Action Drama - HLS'
            },
            {
                sources: [
                    {
                        src: 'http://dash.edgesuite.net/akamai/test/caption_test/ElephantsDream/elephants_dream_480p_heaac5_1.mpd',
                        type: 'application/dash+xml'
                    }
                ],
                poster: 'assets/video/demo-poster.png',
                heading:'Justice League',
                content:'Action Drama - DASH'
            }
        ];
    }]);