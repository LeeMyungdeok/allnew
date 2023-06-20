var http = require('http');

const hostname= '0.0.0.0'
const prot= '8000'

const server = http.createServer(functuon (req, res) {
   res.statusCode=200;
   res.setHeader('Contnt-Type', 'text/plain');
   res.end('Hello from NodeFS in ${process.arch}!\n');
});

server.listen(prot, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
