var express= require('express');
var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static(__dirname));
app.get('/', function(req,res){
    res.sendFile('index.html');
});

app.post('/post',bodyParser.json(), function(req,res){
  console.log(req.body)
})

app.listen(8900, function() {
    console.log("listening on 8900!");
});
