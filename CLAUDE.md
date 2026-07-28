# Konrad Kalinowski — Photography Portfolio

## Про проєкт

Сайт-портфоліо та лендинг для **Konrad Kalinowski** — фотографа з Варшави,
який спеціалізується на фуд-фотографії, а також знімає людей, місця та напої.

**Мета сайту:** залучати клієнтів (ресторани, бари, приватні особи) на
фотозйомки. Головний CTA — контакт/бронювання зйомки.

**Стиль:** мінімалістичний, преміальний, editorial. Акцент на фото, не на UI.
Нічого перевантаженого чи галасливого.

**Мови:** PL (за замовчуванням для контенту, EN — `defaultLocale` у роутингу)
і EN, через `next-intl`. Перемикач мов є в navbar (desktop) і в burger-меню
(mobile).

---

## Технічний стек

- **Framework:** Next.js 16 (App Router) + TypeScript, React 19
- **Стилі:** Tailwind CSS v4 + globals.css
- **i18n:** next-intl (`src/i18n/`), локалі `en` / `pl`, маршрути через `[locale]`
- **Зображення:** Cloudinary (`next-cloudinary`, `src/lib/cloudinary.ts`, компонент `CldStaticImage`)
- **Пошта:** Resend (`src/app/api/contact/route.ts`) — форма контакту з rate-limit (5 запитів/год з IP) та валідацією полів
- **Аналітика:** Vercel Analytics + Speed Insights
- **Деплой:** Vercel (з git push на `main`)

### Конфіг

- `src/config/site.ts` — `SITE_CONFIG` (email, Instagram URL)
- Email отримувача повідомлень: `konradkalinowski.photo@gmail.com`
- Instagram: `https://www.instagram.com/_konradkalinowski.photo/`

---

## Структура сайту

| Маршрут | Призначення |
|---|---|
| `/[locale]` | Головна — hero + intro + слайдер + footer showcase |
| `/[locale]/about` | Про Конрада |
| `/[locale]/projects` | Індекс портфоліо (колекції) |
| `/[locale]/projects/food-photo` | Фуд-фотографія |
| `/[locale]/projects/other-projects` | Інші проєкти |
| `/[locale]/projects/people` | Люди |
| `/[locale]/projects/drinks` | Напої |
| `/[locale]/contact` | Форма контакту |
| `/[locale]/booking` | **Вимкнено** — редіректить на головну (`redirect(/${locale})`) |

## Ключові компоненти

- `src/components/hero/HomeHero.tsx` — hero-секція
- `src/components/sections/HomeIntroSection.tsx` — вступний текстовий блок / цитата на головній
- `src/components/sections/SiteNavbar.tsx` — навбар (адаптивний: прозорий на темному hero, білий на світлих секціях)
- `src/components/sections/FooterShowcase.tsx`, `SiteFooter.tsx` — футер з CTA
- `src/components/slider/PhotoSlider.tsx` — слайдер фото (drag-жести)
- `src/components/gallery/` — GalleryGrid, PhotoGallery, LightboxModal, useLightboxNavigation
- `src/components/about/AboutIntroSection.tsx` — блок "Про мене"
- `src/components/contact/ContactForm.tsx` — форма зв'язку
- `messages/pl.json`, `messages/en.json` — увесь текстовий контент сайту (next-intl)

---

## Правила роботи (не порушувати без явного запиту)

- **НЕ** робити глобальний редизайн стилів без прямого запиту користувача.
- **НЕ** додавати блог, календарну інтеграцію без запиту — booking навмисно вимкнений.
- Весь текст контенту живе в `messages/*.json` — не хардкодити тексти в компонентах.
- Зображення — тільки через Cloudinary/`next/image`, не заливати статичні файли в репо без потреби.
- Комітити тільки коли користувач явно просить коміт/пуш.

---

## Журнал змін (Changelog)

Веди запис тут щоразу, коли додається новий інструмент, сервіс чи помітна
фіча — щоб розвиток проєкту залишався послідовним, без хаосу.

### 2026-07-28
- Оновлено копірайт сторінок "About" та "Contact" (PL/EN), текст цитати на головній сторінці
- Створено цей файл `CLAUDE.md`

### Раніше (з git-історії, без точних дат)
- Додано PL/EN i18n через next-intl + перемикач мов (мобільний топбар + burger-меню)
- Виправлено сортування фото слайдера за числовим ім'ям файлу
- Виправлено редірект booking-сторінки (нативний Next.js redirect з локаллю)
- Оновлено обкладинки альбомів Places/People/Drinks
- Додано альбоми Drinks та People, оновлено layout сторінки Projects
- Мігровано всі зображення на Cloudinary
- Інтегровано Resend + rate-limiting/валідацію в контакт-форму
- Інтегровано Vercel Analytics та Speed Insights
- Вимкнено booking-сторінку (буде повернено пізніше, якщо буде інтеграція з календарем)

---

## Відкладені рішення / майбутній скоуп

- Інтеграція календаря бронювання (Calendly / Google Calendar)
- Блог — поки не потрібен
- Підписи (captions) до фото в слайдері з контекстом проєкту/клієнта
- Соціальний proof / логотипи клієнтів (потрібен реальний контент від клієнта)
