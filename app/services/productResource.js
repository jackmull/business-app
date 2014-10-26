/**
 * Created by Jack on 10/3/2014.
 */
(function (module) {
    "use script";

    module.factory("productResource",
        ["$resource",
            productResource]);

    function productResource($resource) {
        return $resource("/api/products/:productId");
    }

})(angular.module("common.services"));
