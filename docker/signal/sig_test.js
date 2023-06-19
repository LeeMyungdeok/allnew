'use strict';

var http = require("http");
var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Hello World\n');
	}).listen(8000, '0.0.0.0');
console.log('Server Started...');

var singals = {
	'SIGINT' : 2,
	'SIGTERM' : 15
	};
function shutdown(signal, value) {
	server.close(function(){
	server.log('Server Stopped by' + signal);
	process.exit(128 + value);
	});
}

Object.keys(signals).for Each(function (signal {
	process.on(signal, function(){
	shtudown(signal, signals[signal]);
	});
});
