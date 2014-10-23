/**
 * Created by Jack on 10/7/2014.
 */
(function () {
    "use strict";
    angular
        .module('productManagement')
        .directive('dragcontainer', function () {
            return {
                controller: function ($scope) {
                    $scope.remove = function (idx) {
                        $scope.removeTag(idx);
                    };
                }
            };
        })
        .directive('draggable', function () {

            return {
                scope: {
                    ondrop: '&',
                    idx: '@'
                },
                restrict: 'A',
                link: function (scope, element, attrs, ctrl) {
                    element.draggable({
                        start: function (event, ui) {
                            scope.$on("draggable:dropped",
                                function (e) {
                                    scope.ondrop({idx: scope.idx});
                                    scope.$apply();
                                    console.log("droppeded in...");
                                }
                            );
                        },
                        stop: function (event, ui) {
                        }
                    });
                }
            };
        })
        .directive('droppable', function () {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var ele = element;
                    ele.droppable({
                        drop: function (event, ui) {
                            scope.$broadcast("draggable:dropped");
                        }
                    });
                }
            };
        });
}());

