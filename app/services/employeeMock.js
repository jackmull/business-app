// Main module
//  app.module.js
//
(function () {
    'use strict';
    angular.module('employeeManagement',
        ["employeeResourceMock"] // inject the mock here
    );

}());
//
//employeeeMock.js
//
(function () {
    "use strict";
    var app = angular.module("employeeResourceMock",
        ["ngMockE2E"]); // inject angular e2e mock

    app.run(function ($httpBackend) {
        // dummy employe data
        var employees = [
            {firstName: "John", lastName: "Doe"},
            {firstName: "Anna", lastName: "Smith"},
            {firstName: "Peter", lastName: "Jones"}
        ];

        $httpBackend.whenGET().respond(employees);

        // Put other (POST, DELETE) verbs here

        // Change this to whatever you need to let requests for html, etc. thru
        $httpBackend.whenGET(new RegExp("/")).passThrough();
    });

})();