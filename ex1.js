var url =require('url');
var express = require('express');
var app = express();

function HandleRequest(req, res){
var start = new Date().getTime();
 res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<html>
<head>
<script type="text/javascript">
	i=0;
	sites = [\'http://google.com\', \'http://facebook.com\', \'http://youtube.com\', \'http://yahoo.com\', 
	\'http://wikipedia.org\', \'http://linkedin.com\', \'http://live.com\', \'http://twitter.com\', \'http://amazon.com\'];
	firstLoad=[0,0,0,0,0,0,0,0,0,0];
	cachedTimes=[0,0,0,0,0,0,0,0,0,0];
	viewRatios=[1.6,1.4,1.35,1.1,3,1.4,1.4,1.5,2,2];
	beforeload = (new Date()).getTime();
	loadCount = 0;
	const TIMES_TO_LOAD=4;
	
	function pageloadingtime()
	{
		var afterload = (new Date()).getTime();
		var seconds = (afterload-beforeload)/1000;
		if(loadCount == 0){
			firstLoad[i]=seconds;}
		else{
			cachedTimes[i]+=seconds;}
		document.getElementById("loadingtime").innerHTML = document.getElementById("loadingtime").innerHTML+"<font color=\'red\'>"+sites[i]+" Load "+(loadCount+1)+" took " + seconds + " seconds</font></br>";
		loadCount++;
		if(loadCount==TIMES_TO_LOAD){
			loadCount=0;
			i++;
		}
		var f = document.getElementById(\'iframe1\');
		if(i<sites.length){
			beforeload = (new Date()).getTime();
			f.src = sites[i];
		}
		else{
			printFinalData();
		}
	}
	
	function printFinalData()
	{
		for (var j=0;j<sites.length;j++)
		{ 
			document.getElementById("loadingtime").innerHTML = document.getElementById("loadingtime").innerHTML+"<font color=\'blue\'>"+sites[j]+" first load took "+firstLoad[j]+" and cached load takes " + (cachedTimes[j]/(TIMES_TO_LOAD-1)) + " on average</font></br>";
		}
		for (var j=0;j<sites.length;j++)
		{ 
			if(((cachedTimes[j]/(TIMES_TO_LOAD-1))*viewRatios[j])>=firstLoad[j])
				document.getElementById("loadingtime").innerHTML = document.getElementById("loadingtime").innerHTML+"<font color=\'green\'>You have visited"+sites[j]+"!</font></br>";
			else
				document.getElementById("loadingtime").innerHTML = document.getElementById("loadingtime").innerHTML+"<font color=\'purple\'>You did not visited"+sites[j]+"!</font></br>";
		}
	}
</script>
</head>
<body>
<div id="loadingtime"></div>
<br>
	<iframe id="iframe1" src="http://google.com" width="0" height="0"  onload="pageloadingtime();"></iframe>
</body>
<html>');
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