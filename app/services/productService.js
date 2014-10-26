/**
 * Created by Jack on 10/7/2014.
 */
(function (module) {
    "use strict";

    module.factory("productService", function productService() {
            //++
            var service = {
                calcMarginPercent: calcMarginPercent,
                calcMarginAmount: calcMarginAmount,
                calcPriceFromPercent: calcPriceFromPercent,
                calcPriceFromAmount: calcPriceFromAmount
            };
            return service;
            //--
            function calcMarginPercent(price, cost) {
                var margin = 0;
                if (price && cost) {
                    margin = (100 * (price - cost)) / price;
                }
                margin = Math.round(margin);
                return margin;
            }

            function calcMarginAmount(price, cost) {
                var margin = 0;
                if (price && cost) {
                    margin = price - cost;
                }
                return margin;
            }

            function calcPriceFromPercent(cost, percent) {
                var price = cost;
                if (price && percent) {
                    price = cost + (cost * percent / 100);
                    price = (Math.round(price * 100)) / 100;
                }
                return price;
            }

            function calcPriceFromAmount(cost, amount) {
                var price = cost;
                if (price && amount) {
                    price = cost + amount;
                    price = (Math.round(price * 100)) / 100;
                }
                return price;
            }
        });
}(angular.module("common.services")));
