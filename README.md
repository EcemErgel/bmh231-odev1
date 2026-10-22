# bmh231-odev1

Bu proje, Yozgat Bozok Üniversitesi BMH231 Web Programlama dersinin Ödev 1'i için hazırlanmış küçük bir Node.js web sunucusudur. Yalnızca Node.js'in `http` modülü ve tarih hesabı için `dayjs` paketi kullanılmıştır (Express yoktur). Proje Git ve GitHub ile sürüm kontrolü altında geliştirilmiştir.

## Kurulum ve çalıştırma

```
git clone https://github.com/EcemErgel/bmh231-odev1.git
cd bmh231-odev1
npm install
npm start
```

Sunucu http://localhost:3000 adresinde çalışır. Durdurmak için uçbirimde Ctrl+C tuşlarına basın.

## Desteklenen yollar

| Yol | Durum kodu | Yanıt |
|---|---|---|
| `/` | 200 | HTML; başlık ve `/hakkimda` sayfasına bağlantı |
| `/hakkimda` | 200 | HTML; kısa tanıtım sayfası |
| `/api/ders` | 200 | JSON; dersin kodu, adı ve günü |
| `/api/agep` | 200 | JSON; AGEP son teslim tarihi (01.11.2026) ve bugünden kalan gün sayısı |
| diğer tüm yollar | 404 | Düz metin: "Sayfa bulunamadı" |
| GET dışındaki yöntemler | 405 | Düz metin; `Allow: GET` başlığı döner |

Her yanıtta `Content-Type` başlığı `charset=utf-8` ile gönderilir. Sunucu her isteğin yöntemini ve yolunu uçbirime yazar.