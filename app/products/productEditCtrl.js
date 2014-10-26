/**
 * Created by Jack on 10/6/2014.
 */
(function (module) {
    "use strict";

    module.controller("ProductEditCtrl", ProductEditCtrl);

    ProductEditCtrl.$inject = ["product", "$state", "productService"];

    function ProductEditCtrl(product, $state, productService) {
        var vm = this;
        vm.opened = false;
        vm.product = product;
        vm.priceOption = 'percent';
        vm.markupAmount = 0;
        vm.markupPercent = 0;

        vm.marginPercent = function () {
            return productService.calcMarginPercent(vm.product.price,
                vm.product.cost);
        };

        vm.calcPrice = function () {
            var price = 0;

            if (vm.priceOption == 'amount') {
                price = productService.calcPriceFromAmount(
                    vm.product.cost, vm.markupAmount);
            } else if (vm.priceOption == 'percent') {
                price = productService.calcPriceFromPercent(
                    vm.product.cost, vm.markupPercent);
            }
            vm.product.price = price;
        };

        if (vm.product && vm.product.productId) {
            vm.title = "Edit: " + vm.product.productName;
        } else {
            vm.title = "New Product";
        }
        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened = !vm.opened;
        };
        vm.cancel = function () {
            $state.go('productList');
            //  $state.go('productEdit.tags({productId: ' + product.productId + ' })');
        };
        vm.submit = function (isValid) {
            if (!isValid) {
                toastr.error("Save failed, invalid entry.");
                return;
            }
            vm.product.$save(function (data) {
                toastr.success("Save was successful.");
            });
        };
        vm.addTags = function (tags) {
            if (tags) {
                var a = tags.split(',');
                vm.product.tags = vm.product.tags ?
                    vm.product.tags.concat(a) : a;
            } else {
                alert("Please enter 1 or more tags separated by commas.");
            }
        };
        vm.removeTag = function (idx) {
            vm.product.tags.splice(idx, 1);
        };
    }
}(angular.module("productManagement")));
