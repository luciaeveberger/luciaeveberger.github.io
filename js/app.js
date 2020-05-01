var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/about", {
        templateUrl : 'pages/about.html',
    })
    .when("/dma", {
      templateUrl : 'pages/dma.html',
    })
});