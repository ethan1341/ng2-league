var express= require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request = require('request');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static(__dirname));

//db settings
var connect = mongoose.connect('mongodb://localhost/ng-league', function(err) {})
var db = mongoose.connection;
db.once('open', function() {
  console.log('db is open')
});

var championSchema = new mongoose.Schema({
  Name: String,
  ID: Number
})

var championCollection = mongoose.model('championModel', championSchema)

function getChampions(){
  var options = {
    method: "GET",
    url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all",
    qs: {
      api_key: "2ee8e653-62c7-403a-baf1-8e7bc56d0848"
    },
    headers: {
      "User-Agent": "Champions"
    }
  }
}

app.get('/', function(req,res){
    res.sendFile('index.html');
});

app.post('/post',bodyParser.json(), function(req,res){
  console.log(req.body)
})

app.listen(8900, function() {
    console.log("listening on 8900!");
});
