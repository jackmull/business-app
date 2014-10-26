/**
 * Created by Jack on 10/8/2014.
 */
(function (productManagementModule) {
    "use strict";

    productManagementModule
        .controller("PriceAnalyticsCtrl", PriceAnalyticsCtrl);

    PriceAnalyticsCtrl.$inject = [ "$scope", "$filter", "products", "productService"];

    function PriceAnalyticsCtrl($scope, $filter, products, productService) {
        $scope.title = "Price Analytics";

        for (var i = 0; i < products.length; i++) {
            var product = products[i];
            product.marginPercent = productService
                .calcMarginPercent(product.price, product.cost);

            product.marginAmount = productService
                .calcMarginAmount(product.price, product.cost);
        }
        var orderedProductsAmount = $filter("orderBy")(products, "marginAmount");
        var filteredProductsAmount = $filter("limitTo")(orderedProductsAmount, 5);

        var chartDataAmount = [];
        for (var i = 0; i < filteredProductsAmount.length; ++i) {
            chartDataAmount.push({
                x: filteredProductsAmount[i].productName,
                y: [filteredProductsAmount[i].cost,
                    filteredProductsAmount[i].price,
                    filteredProductsAmount[i].marginAmount]
            });
        }

        $scope.dataAmount = {
            series: ["Cost", "Price", "Margin Amount"],
            data: chartDataAmount
        };

        $scope.configAmount = {
            title: "Top $ Margin Products",
            tooltips: true,
            labels: false,
            mouseover: function () {
            },
            mouseout: function () {
            },
            click: function () {
            },
            legend: {
                display: true,
                position: 'right'
            }
        };

        var orderedProductsPercent = $filter("orderBy")(products, "marginPercent");
        var filteredProductsPercent = $filter("limitTo")(orderedProductsPercent, 5);

        var chartDataPercent = [];
        for (var i = 0; i < filteredProductsPercent.length; ++i) {
            chartDataPercent.push({
                x: filteredProductsPercent[i].productName,
                y: [filteredProductsAmount[i].marginPercent]
            });
        }

        $scope.dataPercent = {
            series: ["Margin %"],
            data: chartDataPercent
        };

        $scope.configPercent = {
            title: "Top % Margin Products",
            tooltips: true,
            labels: false,
            mouseover: function () {
            },
            mouseout: function () {
            },
            click: function () {
            },
            legend: {
                display: true,
                position: 'right'
            }
        };
    }
}(angular.module("productManagement")));

