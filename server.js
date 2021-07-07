const http = require('http');
const app = require('./app');
const port = process.env.PORT || process.argv[2] || 3200;
const server = http.createServer(app);
server.listen(port);
console.log("server is running on 3200");
