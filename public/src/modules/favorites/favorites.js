/**
 * Favorites module - Favorites screen
 */
angular.module('myApp')
    .controller('favCtrl', ['$scope',  function favCtrl($scope) {

        $scope.vidArr = [
            {
                sources: [
                    {
                        src: 'http://clips-akc.us-east-1.next.gopro.com/6d9c/media/mp4/gopro/2016/09/13/6d9c5000-13b2-4cc2-b486-72d58976e767/1473801787608/asset_1200k.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/video/demo-poster.png',
                heading:'Lorem Ipsum',
                content:' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            },
            {
                sources: [
                    {
                        src: 'http://vjs.zencdn.net/v/oceans.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/images/vp-g01.jpg',
                heading:'Lorem Ipsum',
                content:' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            },{
                sources: [
                    {
                        src: 'http://clips-akc.us-east-1.next.gopro.com/6d9c/media/mp4/gopro/2016/09/13/6d9c5000-13b2-4cc2-b486-72d58976e767/1473801787608/asset_1200k.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/video/demo-poster.png',
                heading:'Lorem Ipsum',
                content:' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            },
            {
                sources: [
                    {
                        src: 'http://vjs.zencdn.net/v/oceans.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/images/vp-g01.jpg',
                heading:'Lorem Ipsum',
                content:' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            },
            {
                sources: [
                    {
                        src: 'http://vjs.zencdn.net/v/oceans.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/images/vp-g01.jpg',
                heading:'Lorem Ipsum',
                content:' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            },
            {
                sources: [
                    {
                        src: 'http://clips-akc.us-east-1.next.gopro.com/6d9c/media/mp4/gopro/2016/09/13/6d9c5000-13b2-4cc2-b486-72d58976e767/1473801787608/asset_1200k.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/video/demo-poster.png',
                heading:'Lorem Ipsum',
                content:' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            },
            {
                sources: [
                    {
                        src: 'http://clips-akc.us-east-1.next.gopro.com/6d9c/media/mp4/gopro/2016/09/13/6d9c5000-13b2-4cc2-b486-72d58976e767/1473801787608/asset_1200k.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/video/demo-poster.png',
                heading:'Lorem Ipsum',
                content:' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            },
            {
                sources: [
                    {
                        src: 'http://vjs.zencdn.net/v/oceans.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'assets/images/vp-g01.jpg',
                heading:'Lorem Ipsum',
                content:' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            }
        ];
    }]);