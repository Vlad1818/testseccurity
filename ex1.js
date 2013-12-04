var url =require('url');
var express = require('express');
var app = express();
var fs = require('fs');

function HandleRequest(req, res){
var start = new Date().getTime();
 res.writeHead(200, {'Content-Type': 'text/html'});
fs.readFileSync('./loader.html', function (err, html) {
    res.write(html);
}	
res.end();
var end = new Date().getTime();
var time = end - start;
  console.log('Request time: '+time);
};


app.get('/', function(req, res, next){
  HandleRequest(req, res);
  next();
});

app.get('/', function(req, res, next){
  console.log('Request recieved, query: ', url.parse(req.url).query);
});


app.listen(process.env.PORT || 9615);
console.log('server up');