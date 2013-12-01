var url =require('url');
var express = require('express');
var app = express();
sites = ['google.com', 'facebook.com', 'youtube.com', 'yahoo.com', 
'wikipedia.org', 'linkedin.com', 'live.com', 'twitter.com', 'amazon.com', 'taobao.com'];

function HandleRequest(req, res){
var start = new Date().getTime();
 res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<html>');
res.write('<body>');
res.write('This site hacks you up!');
res.write('</br>');
sites.forEach(function(site){res.write(site+'</br>')});
res.write('</body>');
res.write('<html>');
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


app.listen(9615);
console.log('server up');