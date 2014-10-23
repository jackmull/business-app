/**
 * Created by Jack on 10/10/2014.
 */
(function (angular) {
    "use strict";
    function WidgetButton() {
        return {
            restrict: 'E',
            templateUrl: "/directives/widgetButton.html"
//            scope: {
//                widget: '='
//            }
        };
    }
    angular
        .module('productManagement')
        .directive('widgetButton', WidgetButton);

}(angular));