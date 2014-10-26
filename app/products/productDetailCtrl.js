/**
 * Created by Jack on 10/6/2014.
 */
(function (module) {
    "use strict";

    module.controller("ProductDetailCtrl", ProductDetailCtrl);

    ProductDetailCtrl.$inject = ["product", "productService"];

    function ProductDetailCtrl(product, productService) {

        var vm = this;
        vm.product = product;
        vm.title = "Product Detail: " + vm.product.productName;
        vm.marginPercent = productService.calculateMarginPercent(vm.product.price, vm.product.cost);

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }

        vm.Margin = function () {
            return parseInt((((vm.product.price - vm.product.cost) / vm.product.cost) * 100), 10) + ' %';
        };
    }
}(angular.module("productManagement")
));