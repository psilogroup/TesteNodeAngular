
baseURL = "http://192.168.0.6:8088";
angular
.module("teste_node_angular", ["ngRoute"])
.config(function($routeProvider, $locationProvider,$httpProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/produtos.html",
            controller: "produtos"
        });
        
});
