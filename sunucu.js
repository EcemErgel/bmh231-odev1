const http = require('http');
const dayjs = require('dayjs');

// Yanıt göndermeyi tek yerde toplayan yardımcı fonksiyon
function gonder(res, durum, tur, icerik, ekBaslik = {}) {
  res.writeHead(durum, { 'Content-Type': `${tur}; charset=utf-8`, ...ekBaslik });
  res.end(icerik);
}

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  // GET dışındaki yöntemler: 405 + Allow başlığı
  if (req.method !== 'GET') {
    return gonder(res, 405, 'text/plain', 'Yöntem desteklenmiyor', { Allow: 'GET' });
  }

  if (req.url === '/') {
    gonder(res, 200, 'text/html',
      '<h1>BMH231 Web Programlama Ödev 1</h1><a href="/hakkimda">Hakkımda</a>');
  } else if (req.url === '/api/ders') {
    gonder(res, 200, 'application/json',
      JSON.stringify({ kod: 'BMH231', ad: 'Web Programlama', gun: 'Cuma' }));
  } else if (req.url === '/api/agep') {
    const sonTeslim = dayjs('2026-11-01');
    const kalanGun = sonTeslim.diff(dayjs().startOf('day'), 'day');
    gonder(res, 200, 'application/json',
      JSON.stringify({ sonTeslim: '01.11.2026', kalanGun }));
  } else {
    gonder(res, 404, 'text/plain', 'Sayfa bulunamadı');
  }
});

server.listen(3000, () => {
  console.log('Sunucu çalışıyor: http://localhost:3000');
});