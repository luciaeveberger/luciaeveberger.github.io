var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    console.log('I am evaluating');
    $routeProvider
    .when("/about", {
        templateUrl : 'pages/about.html',
    });
    // .when("/red", {
    //     templateUrl : "red.htm"
    // })
    // .when("/green", {
    //     templateUrl : "green.htm"
    // })
    // .when("/blue", {
    //     templateUrl : "blue.htm"
    // });
});