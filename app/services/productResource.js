/**
 * Created by Jack on 10/3/2014.
 */
(function () {
    "use script";

    var module = angular.module("common.services");

    module.factory("productResource",
                  ["$resource",
                   productResource]);

    function productResource($resource) {
        return $resource("/api/products/:productId");
    }

})();
