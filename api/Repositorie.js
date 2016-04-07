
var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoDB = require("./Database");

//GET /GetProducts (Listagem de Produtos)
function listarProdutos(router)
{
    router.route("/GetProducts").get(function(req,res){
        var response = {};
        mongoDB.products.find({},function(err,data){
            if (err)
            {
                response = {"erro" : true,"msg" : "não foi possível carregar"};
                return res.json(response);
            }
            else
            {
                response = {"erro" : false,"msg" : "produtos listados com sucesso","data" : data};
                return res.json(response);
            }
        });
    })
}

function ObterProduto(router)
{
    router.route("/GetProducts/:id").get(function(req,res){
        var response = {};
        mongoDB.products.findOne({_id : req.params.id},function(err,product){
            if (err)
            {
                response = {"erro" : true,"msg" : "não foi possível carregar"};
                return res.json(response);
            }
            else
            {
                response = {"erro" : false,"msg" : "produto carregado com sucesso","prod" : product};
                return res.json(response);
            }
        });
    });
}
//POST /products/new (Cadastro de Produtos)
function cadastrarProduto(router)
{
    router.route("/products/new").post(function(req,res){
        var response = {};
        
        var prod = new mongoDB.products();    
        prod.Nome = req.body.Nome;
        prod.Descricao = req.body.Descricao;
        prod.Preco = req.body.Preco;
        
        prod.save(function(err){
            if (err)
            {
                response = {"erro" : true,"msg" : "não salvar o produto"};
                return res.json(response);
            }
            else
            {
                response = {"erro" : false,"msg" : "produto salvo com sucesso","data" : prod};
                return res.json(response);
            }
        }) 
    });
    
}


module.exports = {
    //Registra todas as rotas do repositorio
    registerAll : function(router){
        listarProdutos(router);
        cadastrarProduto(router);
        ObterProduto(router);
    }
}
