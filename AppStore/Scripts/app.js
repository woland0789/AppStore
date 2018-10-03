var app = angular.module("app", ['ngRoute']);

// =====================================
// configure the route navigation
// =====================================
app.config(function ($routeProvider) {
    $routeProvider
        .when("/",
            {
                templateUrl: "/Scripts/html/home.html",
                controller: "homeController"
            })
        .when("/home",
            {
                templateUrl: "/Scripts/html/home.html",
                controller: "homeController"
            })
        .when("/about",
            {
                templateUrl: "/Scripts/html/about.html"
            })
        .when("/contact",
            {
                templateUrl: "/Scripts/html/contact.html"
            })
        .when("/catalog",
            {
                templateUrl: "/Scripts/html/catalog.html",
                controller: "catalogController"
            })
        .when("/basket",
            {
                templateUrl: "/Scripts/html/basket.html",
                controller: "basketController"
            })
        .when("/login",
            {
                templateUrl: "/Scripts/html/account/login.html",
                controller: "loginController"
            })
        .when("/registration",
            {
                templateUrl: "/Scripts/html/account/registration.html",
                controller: "registrationController"
            })
        .when("/newgoods",
            {
                templateUrl: "/Scripts/html/goodsCard.html",
                controller: "goodsCardController"
            })
        .when("/goodsCard/:id",
            {
                templateUrl: "/Scripts/html/goodsCard.html",
                controller: "goodsCardController"
            });
});