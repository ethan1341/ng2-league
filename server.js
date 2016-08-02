var express= require('express');
var app = express();
app.use(express.static(__dirname));
app.get('/', function(req,res){
    res.sendFile('index.html');
});

app.listen(8900, function() {
    console.log("listening on 8900!");
});
