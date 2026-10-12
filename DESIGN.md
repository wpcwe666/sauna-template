---
name: Лесная сауна
description: Лендинг сауны в мире «Сруб и жар» — тёмная вагонка, пергаментная бумага и один огненный акцент; бронь как главный зал
colors:
  night: "#1D1712"
  night-2: "#2A211A"
  paper: "#F4EDE1"
  paper-deep: "#ECE2D2"
  board: "#FDFBF6"
  cell: "#F5EEE2"
  cell-deep: "#E8DCC7"
  ink: "#231B13"
  ink-soft: "#6E6152"
  line: "#E1D6C3"
  ember: "#D96A15"
  ember-deep: "#A6490A"
  spruce: "#41604F"
  cream: "#F4EDE1"
  cream-soft: "#C7B99F"
typography:
  display:
    fontFamily: "Podkova, Georgia, serif"
    fontSize: "clamp(2.9rem, 6.5vw, 4.9rem)"
    fontWeight: 700
    lineHeight: 1.05
    textTransform: "none"
  headline:
    fontFamily: "Podkova, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.12
  body:
    fontFamily: "Golos Text, Segoe UI, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Golos Text, Segoe UI, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    letterSpacing: "0.12em"
    textTransform: "uppercase"
rounded:
  ctl: "12px"
  patch: "16px"
  cell: "10px"
spacing:
  section: "clamp(56px, 9vw, 104px)"
  gutter: "clamp(16px, 4vw, 32px)"
  group: "26px"
  intra: "8px"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.ink}"
    rounded: "{rounded.ctl}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ember-deep}"
    textColor: "#FDF3E4"
  button-dark:
    backgroundColor: "{colors.night}"
    textColor: "{colors.cream}"
    rounded: "{rounded.ctl}"
    padding: "12px 24px"
  slot-session:
    backgroundColor: "{colors.cell}"
    textColor: "{colors.ink}"
    rounded: "{rounded.cell}"
    height: "44px"
  slot-session-active:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.ink}"
    rounded: "{rounded.cell}"
    height: "44px"
  input-field:
    backgroundColor: "{colors.cell}"
    textColor: "{colors.ink}"
    rounded: "{rounded.cell}"
    height: "52px"
---

# Design System: Лесная сауна

## Overview

**Creative North Star: «Сруб и жар»**

Мир выведен из исследования 33 сайтов саун и бань (см. RESEARCH.md): канон ниши —
тёмное тёплое дерево, пергаментная бумага и один огненный акцент; премиум говорит
парой «тёплый сериф + чистый гротеск». Страница — вечерняя сауна: жжёная вагонка
героя, секции брони и подвала окружают светлый бумажный контент, и только выбранное
время горит углём. Бронь — главный зал: тёмное поле секции, белая панель виджета и
билет-«номерок», как у лидеров, ставящих выбор сеанса на первый экран.

**Key Characteristics:**
- Тёмные целые поля (герой, бронь, подвал) против бумажного контента — контраст «жар/покой».
- Podkova ведёт заголовки и цифры (тёплый срубный сериф), Golos Text держит текст и капс-метки.
- Капс-метки над каждой секцией («ЗАЛЫ И ЦЕНЫ», «БРОНИРОВАНИЕ») — редакционный приём ниши.
- Живой статус часов в герое, температуры парной/купели как характеристика продукта.
- Метки состояний без цвета: квадрат на слоте, черта под сегментом, галочка в чипе, пунктир.

## Colors

Тёплая природная гамма: жжёное дерево для тёмных полей, пергамент и белая доска для
светлых, уголь — единственный горячий цвет, хвоя — вторичный (иконки, цены).

### Primary
- **Жар** (#D96A15): CTA и активные состояния — выбранная дата, слот, сегмент; текст на нём — чернила. Глубже (#A6490A) — hover, ошибки, мелкий акцентный текст.

### Secondary
- **Ночь** (#1D1712, глубже #14100C): герой, секция брони, подвал, шапочные тёмные кнопки; приподнятая доска на тёмном — #2A211A.
- **Хвоя** (#41604F): иконки, цены в чипах и меню — спокойный вторичный цвет.

### Neutral
- **Пергамент** (#F4EDE1 / #ECE2D2): фон страницы и ленты секций.
- **Доска** (#FDFBF6): панели, форма, билет; ячейка (#F5EEE2 / #E8DCC7) — слоты и hover.
- **Чернила** (#231B13 / #6E6152): текст; на тёмном — крем (#F4EDE1) и приглушённый (#C7B99F).
- **Рельс** (#E1D6C3 на светлом, rgba(244,237,225,.16) на тёмном): линии и рамки.

### Named Rules
**The Heat Rule.** Уголь — только CTA и активное состояние; один горячий объект на экран.
**The Mark Rule.** Состояние читается и без цвета: квадрат на слоте, черта под сегментом, галочка в чипе, пунктир на недоступном.
**The Wood Rule.** Тёмные поля удерживаются секциями целиком; уголь и хвоя не брызгают по светло.

## Typography

**Display Font:** Podkova (тёплый срубный сериф с кириллицей; fallback Georgia)
**Body Font:** Golos Text (fallback Segoe UI, system-ui)

**Character:** Podkova в нижнем регистре читается как доска с выжженной надписью —
домашне и основательно; капс Golos с разрядкой — метки расписаний и CTA.
Оба семейства вариативные, встроены base64 вместе с микро-сабсетом знака ₽.

### Hierarchy
- **Display** (700, clamp(2.9rem, 6.5vw, 4.9rem), 1.05): имя сауны в герое.
- **Headline** (700, clamp(1.9rem, 3.4vw, 2.5rem), 1.12): заголовки секций; text-wrap: balance.
- **Kicker** (600, 0.78rem, +0.12em, caps Golos, цвет угля-глубокого): метка над заголовком секции.
- **Board labels** (600, 0.78rem, +0.09em, caps Golos): подписи табло температур, «ВАШ СЕАНС».
- **Body** (400, 16px, 1.6): максимум 58ch.
- Цифры меняющихся значений и крупных цен — Podkova, tabular-nums.

## Layout

Одна колонка на мобильном, контейнер max 1160px, поля clamp(16px, 4vw, 32px). Секции
дышат clamp(56px, 9vw, 104px); чередование: ночь (герой) → пергамент (о сауне, галерея)
→ глубокий пергамент (залы и цены) → ночь (бронь) → пергамент (контакты) → ночь (подвал).
Герой и бронь — доли 7fr/5fr; галерея — 6-колоночная сетка wide/small/pano; залы — 7fr/5fr.
Переломы: 1000px, 820px, 600px, 480px.

## Elevation & Depth

Система плоская: глубину дают поля цвета и рельс-линии, не тени. Единственная тень
`0 18px 44px -18px rgba(20,12,5,.55)` — для плавающих слоёв (модалки, лайтбокс,
плавающая CTA). Дырка билета — inset-тень.

## Shapes

Контролы 12px, поверхности 16px, ячейки 10px. Рамка фото — тонкое светлое «окно»
(inset 12px) на тёмном поле. Билет с пробитой дыркой цвета ночи, на котором лежит.

## Components

### Buttons
- **Primary:** жар #D96A15, текст-чернила; hover — #A6490A с кремовым текстом; active — translateY(1px).
- **Dark (шапка/карточки):** ночь #1D1712, кремовая; hover — #14100C.
- **Ghost:** 1px рамка чернил, hover заливает; на тёмном — светлая рамка.
- Фокус: 2px outline жара со сдвигом 2px.

### Session Slot (signature)
- **Style:** бледная ячейка 44px, цифры Golos.
- **Active:** жар + чернила + квадрат-метка 6px в правом верхнем углу.
- **Unavailable:** пунктирный призрак; появление доски — слот-стаггер 16ms, гасится prefers-reduced-motion.

### Chips (допы и залы)
- **Style:** белая доска, рельс-рамка; цена хвоей.
- **Checked:** ячейка глубже #E8DCC6 + тлеющая галочка; фокус — outline жара.

### Cards / Containers
- **Corner Style:** 16px; белые доски на пергаменте, на ночи — только белые.
- **Border:** 1px рельс; теней нет.

### Inputs / Fields
- **Style:** ячейка на белой панели, рельс-рамка, 52px, caret #A6490A.
- **Focus:** outline 2px жара; ошибка — #A6490A и рецепт исправления.

### Билет сеанса
Белая доска с дыркой цвета ночи, капс-метка «ВАШ СЕАНС», дата и интервал Podkova,
пары «метка/значение», перфорация, цена крупно, живой предпросмотр сообщения.

## Do's and Don'ts

### Do:
- **Do** держать жар только на CTA и активном; hover — #A6490A.
- **Do** помечать состояния метками (квадрат, черта, галочка, пунктир), а не только цветом.
- **Do** отдавать секции целиком ночи или пергаменту — поля, не брызги.
- **Do** встривать Podkova и Golos Text в файл (base64 woff2, включая ₽-сабсет).

### Don't:
- **Don't** не вводи второй тёплый акцент, свечения, стекло, градиенты (в т.ч. сине-фиолетовые).
- **Don't** не выравнивай карточки в равные колонки — доли 7/5, wide/pano.
- **Don't** не ставь тени на стационарные поверхности.
- **Don't** не заменяй линейные SVG-иконки (stroke 1.75) эмодзи или глифами.
