var url =require('url');
var express = require('express');
var app = express();

function HandleRequest(req, res){
var start = new Date().getTime();
 res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<html>');
res.write('<head>');
res.write('<script type="text/javascript">');
res.write('	i=0;');
res.write('	sites = [\'http://google.com\', \'http://facebook.com\', \'http://youtube.com\', \'http://yahoo.com\', ');
res.write('	\'http://wikipedia.org\', \'http://linkedin.com\', \'http://live.com\', \'http://twitter.com\', \'http://amazon.com\'];');
res.write('	firstLoad=[0,0,0,0,0,0,0,0,0,0];');
res.write('	cachedTimes=[0,0,0,0,0,0,0,0,0,0];');
res.write('	viewRatios=[1.6,1.4,1.35,1.1,3,1.4,1.4,1.5,2,2];');
res.write('	beforeload = (new Date()).getTime();');
res.write('	loadCount = 0;');
res.write('	const TIMES_TO_LOAD=4;');
res.write('	function pageloadingtime()');
res.write('	{');
res.write('		var afterload = (new Date()).getTime();');
res.write('		var seconds = (afterload-beforeload)/1000;');
res.write('		if(loadCount == 0){');
res.write('			firstLoad[i]=seconds;}');
res.write('		else{');
res.write('			cachedTimes[i]+=seconds;}');
res.write('		document.getElementById("loadingtime").innerHTML = document.getElementById("loadingtime").innerHTML+"<font color=\'red\'>"+sites[i]+" Load "+(loadCount+1)+" took " + seconds + " seconds</font></br>";');
res.write('		loadCount++;');
res.write('		if(loadCount==TIMES_TO_LOAD){');
res.write('			loadCount=0;');
res.write('			i++;');
res.write('		}');
res.write('		var f = document.getElementById(\'iframe1\');');
res.write('		if(i<sites.length){');
res.write('			beforeload = (new Date()).getTime();');
res.write('			f.src = sites[i];');
res.write('		}');
res.write('		else{');
res.write('			printFinalData();');
res.write('		}');
res.write('	}	');
res.write('	function printFinalData()');
res.write('	{');
res.write('		for (var j=0;j<sites.length;j++)');
res.write('		{ ');
res.write('			document.getElementById("loadingtime").innerHTML = document.getElementById("loadingtime").innerHTML+"<font color=\'blue\'>"+sites[j]+" first load took "+firstLoad[j]+" and cached load takes " + (cachedTimes[j]/(TIMES_TO_LOAD-1)) + " on average</font></br>";');
res.write('		}');
res.write('		for (var j=0;j<sites.length;j++)');
res.write('		{ ');
res.write('			if(((cachedTimes[j]/(TIMES_TO_LOAD-1))*viewRatios[j])>=firstLoad[j])');
res.write('				document.getElementById("loadingtime").innerHTML = document.getElementById("loadingtime").innerHTML+"<font color=\'green\'>You have visited"+sites[j]+"!</font></br>";');
res.write('			else');
res.write('				document.getElementById("loadingtime").innerHTML = document.getElementById("loadingtime").innerHTML+"<font color=\'purple\'>You did not visited"+sites[j]+"!</font></br>";');
res.write('		}');
res.write('	}');
res.write('</script>');
res.write('</head>');
res.write('<body>');
res.write('<div id="loadingtime"></div>');
res.write('<br>');
res.write('	<iframe id="iframe1" src="http://google.com" width="0" height="0"  onload="pageloadingtime();"></iframe>');
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


app.listen(process.env.PORT || 9615);
console.log('server up');