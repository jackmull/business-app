(function (angular) {
    "use strict";
    function navbar() {
        return {
            restrict: 'E',
            templateUrl: "/directives/navbar.html",
            scope: {
                product: '='
            }
        };
    }
    angular
        .module('productManagement')
        .directive('navbar', navbar);

}(angular));
