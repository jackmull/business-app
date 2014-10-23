/**
 * Created by Jack on 10/10/2014.
 */

(function () {
    "use strict";
    angular.module("productManagement")
        .controller("ProductButtonsCtrl", ProductButtonsCtrl);

    function ProductButtonsCtrl() {
        var vm = this;

        vm.title = "Button display";
        vm.widgetbtns = [
            {
                color: "default",
                glyph: "glyphicon glyphicon-cog",
                count: "1434",
                text: "Some cool message here."
            },
            {
                color: "success",
                glyph: "glyphicon glyphicon-star-empty",
                count: "12,444",
                text: "Some cool message here."
            },
            {
                color: "warning",
                glyph: "glyphicon glyphicon-search",
                count: "6,534",
                text: "Some cool message here."
            },
            {
                color: "danger",
                glyph: "glyphicon glyphicon-fire",
                count: "5,354",
                text: "Some cool message here."
            },
            {
                color: "primary",
                glyph: "glyphicon glyphicon-user",
                count: "2,114",
                text: "Some cool message here."
            },
            {
                color: "warning",
                glyph: "glyphicon glyphicon-eye-open",
                count: "42,522",
                text: "Some cool message here."
            },
            {
                color: "success",
                glyph: "glyphicon glyphicon-headphones",
                count: "745",
                text: "Some cool message here."
            },
            {
                color: "danger",
                glyph: "glyphicon glyphicon-thumbs-down",
                count: "1,445",
                text: "Some cool message here."
            }
        ];
    }
}());

