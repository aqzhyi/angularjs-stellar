;'use strict';
angular.module('site', ['stellar.directives'])
    .config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    })
    .controller('stellarCtrl', function($scope, stellar) {
        // The first step is to run .stellar() against the element:
        stellar.against(window);
        // ,
        // stellar.window();
        // or
        // stellar.against('body, .planet, .sun');
    })
;