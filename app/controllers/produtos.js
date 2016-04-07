angular
.module("teste_node_angular")
.controller("produtos", function($scope, $route, $routeParams,$http, $location){
    
    $scope.carregarProdutos = function(){
        $http.get(baseURL+"/GetProducts/").then(function(response){
            $scope.Produtos = response.data.data;
        });
    }
    
    $scope.ObterProduto = function(Id){
        $http.get(baseURL+"/GetProducts/"+Id).then(function(response){
            $scope.Produto = response.data.prod;
            
        });
    }
});