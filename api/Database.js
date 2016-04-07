var mongoose = require("mongoose");
mongoose.connect('mongodb://192.168.0.6:27017/teste_node_angular');
var Schema = mongoose.Schema;


var productsSchema = new Schema({
    "Nome" : String,
    "Descricao" : String,
    "Preco" : Number
});

module.exports = {
	products : mongoose.model('products',productsSchema)
};
