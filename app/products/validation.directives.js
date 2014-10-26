/**
 * Created by Jack on 10/24/2014.
 */
(function (module) {
    "use strict";

    module.directive("range", function () {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attr, ngModel) {
                var range = scope.$eval(attr.range);
                ngModel.$validators.range = function (modelValue) {
                    return modelValue && modelValue > range.gt && modelValue < range.lt;
                };
            }
        };
    });
}(angular.module("productManagement")));

