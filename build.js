/* Сборка для хостинга (Netlify запускает её сама: netlify.toml → command = "node build.js").
   Читает content.json (его редактирует владелец в админке) и подставляет данные
   в <title>, meta description, Open Graph и JSON-LD — чтобы поисковики видели
   настоящий контент, а не шаблонные заглушки. Код сайта не меняет. */
"use strict";
const fs = require("fs");

const content = JSON.parse(fs.readFileSync("content.json", "utf8"));
let html = fs.readFileSync("index.html", "utf8");

const name = String(content.name || "Сауна").trim();
const tagline = String(content.tagline || "").trim();
const capacity = content.capacity || "";
const halls = Array.isArray(content.halls) ? content.halls : [];
const prices = halls.map(h => h.pricePerHour).filter(Boolean);
const minPrice = prices.length ? Math.min.apply(null, prices) : null;
const firstPhoto = Array.isArray(content.photos) && content.photos.length
  ? (typeof content.photos[0] === "string" ? content.photos[0] : (content.photos[0] && content.photos[0].photo) || "images/1.jpg")
  : "images/1.jpg";

function cut(s, n){ s = String(s).trim(); return s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…" : s; }

const priceBit = minPrice ? "От " + minPrice.toLocaleString("ru-RU") + " ₽ в час" : null;
const capBit   = capacity ? "до " + capacity + " гостей" : null;
const bits = [priceBit, capBit].filter(Boolean).join(", ");

const title = cut(tagline ? name + " — " + tagline : name, 70);
const description = cut([tagline, bits, "Заявка — менеджеру в Telegram"].filter(Boolean).join(". "), 170);

/* --- простые замены по одному вхождению --- */
function swapOne(pattern, replacement, label){
  if (!pattern.test(html)) { console.warn("build.js: не найдено: " + label); return; }
  html = html.replace(pattern, replacement);
}

swapOne(/<title>[\s\S]*?<\/title>/, "<title>" + escHtml(title) + "</title>", "title");
swapOne(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + escAttr(description) + '">', "meta description");
swapOne(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + escAttr(name) + '">', "og:title");
swapOne(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + escAttr(description) + '">', "og:description");
swapOne(/<meta property="og:image" content="[^"]*">/, '<meta property="og:image" content="' + escAttr(firstPhoto) + '">', "og:image");

/* --- JSON-LD --- */
const ldStart = html.indexOf('<script type="application/ld+json">');
if (ldStart !== -1) {
  const ldOpen = html.indexOf(">", ldStart) + 1;
  const ldClose = html.indexOf("</script>", ldOpen);
  let ld = html.slice(ldOpen, ldClose);

  const parts = String(content.address || "").split(",");
  const locality = parts[0].trim();
  const street = parts.slice(1).join(",").trim();

  ld = swapLd(ld, "name", name);
  ld = swapLd(ld, "description", cut([tagline, bits].filter(Boolean).join(". "), 200) || name);
  if (content.phone) ld = swapLd(ld, "telephone", content.phone);
  if (street) ld = swapLd(ld, "streetAddress", street);
  if (locality) ld = swapLd(ld, "addressLocality", locality);
  if (prices.length) ld = swapLd(ld, "priceRange", Math.min.apply(null, prices) + "–" + Math.max.apply(null, prices) + " RUB");

  html = html.slice(0, ldOpen) + ld + html.slice(ldClose);
} else {
  console.warn("build.js: JSON-LD не найден");
}

function swapLd(ld, key, value){
  const re = new RegExp('("' + key + '"\\s*:\\s*)"(?:[^"\\\\]|\\\\.)*"');
  if (!re.test(ld)) { console.warn("build.js: JSON-LD нет ключа " + key); return ld; }
  return ld.replace(re, '$1' + JSON.stringify(String(value)));
}
function escHtml(s){ return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function escAttr(s){ return escHtml(s).replace(/"/g, "&quot;"); }

fs.writeFileSync("index.html", html);
console.log("build.js OK: title/description/OG/JSON-LD обновлены из content.json");
