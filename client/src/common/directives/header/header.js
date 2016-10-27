/**
 * Created by priya.singh on 10/20/2016.
 */
/**
 * @ used to show header in the application
 */
angular.module("myApp").directive('header', function () {
    return {
        restrict: 'A', //This means that it will be used as an attribute and NOT as an element.
        replace: true,
        scope: true,
        templateUrl: "directives/header/header.tpl.html",
        controller: function($scope,$state,$timeout) {
            $scope.tabclick = function(value){
                $scope.activeMenu = value;
                $state.go(value);
            };

            /**Search Container JS**/
            (function() {
                $timeout(function () {
                    var morphSearch = document.getElementById( 'morphsearch' ),
                        input = morphSearch.querySelector( 'input.morphsearch-input' ),
                        ctrlClose = morphSearch.querySelector( 'span.morphsearch-close' ),
                        isOpen = false,
                        isAnimating = false;
                    isOpen = isAnimating;
                    // show/hide search area
                    toggleSearch = function(evt) {
                        // return if open and the input gets focused
                        if( evt.type.toLowerCase() === 'focus' && isOpen ) {
                            return false;
                        }

                        var offsets = morphsearch.getBoundingClientRect();
                        if( isOpen ) {
                            classie.remove( morphSearch, 'open' );

                            // trick to hide input text once the search overlay closes
                            // todo: hardcoded times, should be done after transition ends
                            if( input.value !== '' ) {
                                setTimeout(function() {
                                    classie.add( morphSearch, 'hideInput' );
                                    setTimeout(function() {
                                        classie.remove( morphSearch, 'hideInput' );
                                        input.value = '';
                                    }, 300 );
                                }, 500);
                            }

                            input.blur();
                        }
                        else {
                            classie.add( morphSearch, 'open' );
                        }
                        isOpen = !isOpen;
                    };

                    // events
                    input.addEventListener( 'focus', toggleSearch );
                    ctrlClose.addEventListener( 'click', toggleSearch );
                    // esc key closes search overlay
                    // keyboard navigation events
                    document.addEventListener( 'keydown', function( ev ) {
                        var keyCode = ev.keyCode || ev.which;
                        if( keyCode === 27 && isOpen ) {
                            toggleSearch(ev);
                        }
                    } );


                    /***** for demo purposes only: don't allow to submit the form *****/
                    morphSearch.querySelector( 'button[type="submit"]' ).addEventListener( 'click', function(ev) { ev.preventDefault(); } );
                },1000);

            })();
        }
    };
});