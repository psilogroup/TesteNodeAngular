var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();
var repo = require("./Repositorie");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {

  //Permite o CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  next();
});

repo.registerAll(router);

router.get("/", function (req, res) {
	res.json({ "erro": false, "mensagem": "Hoje e dia de alegria" });
});

app.use('/', router);
app.listen(8088);
console.log("Listening to port 8088 at 127.0.0.1");
