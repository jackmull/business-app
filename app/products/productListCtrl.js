/**
 * Created by Jack on 10/3/2014.
 */
(function (module) {
    'use strict';

    module.controller("ProductListCtrl", ProductListCtrl);

    ProductListCtrl.$inject = ["productResource"];
    function ProductListCtrl(productResource) {

        var vm = this;
        vm.products = null;
        vm.showImage = false;

        productResource.query(function (data) {
            vm.products = data;
        });

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        };
    }
}(angular.module("productManagement")));
