const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Merhaba');
});

server.listen(3000, () => {
  console.log('Sunucu çalışıyor: http://localhost:3000');
});