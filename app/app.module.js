(function () {
    'use strict';
//Main module
    var app = angular.module('productManagement',
        [
            "common.services",
            "productResourceMock"
        ]);

    app.config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "./welcomeView.html"
                })
                .state("productList", {
                    url: "/products",
                    templateUrl: "/products/productListView.html",
                    controller: "ProductListCtrl as vm"
                })
                .state("productDetail", {
                    url: "/products/:productId",
                    templateUrl: "/products/productDetailView.html",
                    controller: "ProductDetailCtrl as vm",
                    resolve: {
                        productResource: "productResource",
                        product: function (productResource, $stateParams) {
                            var productId = $stateParams.productId;
                            return productResource.get(
                                { productId: productId }
                            ).$promise;
                        }
                    }
                })
                .state("productEdit", {
                    abstract: true,
                    url: "/products/edit/:productId",
                    templateUrl: "/products/productEditView.html",
                    controller: "ProductEditCtrl as vm",
                    resolve: {
                        productResource: "productResource",
                        product: function (productResource, $stateParams) {
                            var productId = $stateParams.productId;
                            return productResource.get(
                                { productId: productId }
                            ).$promise;
                        }
                    }
                })
                .state("productEdit.info", {
                    url: "/info",
                    templateUrl: "/products/productEditInfoView.html"
                })
                .state("productEdit.price", {
                    url: "/price",
                    templateUrl: "/products/productEditPriceView.html"
                })
                .state("productEdit.tags", {
                    url: "/tags",
                    templateUrl: "/products/productEditTagsView.html"
                })
                .state("priceAnalytics", {
                    url: "/priceAnalytics",
                    templateUrl: "/prices/priceAnalyticsView.html",
                    controller: "PriceAnalyticsCtrl",
                    resolve: {
                        productResource: "productResource",
                        products: function (productResource) {
                            return productResource.query().$promise;
                        }
                    }
                })
                .state("productButtons", {
                    url: "/productButtons",
                    templateUrl: "/products/productButtonsView.html",
                    controller: "ProductButtonsCtrl as vm"
            });
        }]);
}());

