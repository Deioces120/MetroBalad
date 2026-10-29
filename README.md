# متروبلد | MetroBalad

**مسیریاب تعاملی متروی تهران، همراه با بازی واژه‌سازی؛ فارسی، راست‌چین و قابل نصب به‌صورت وب‌اپ.**

MetroBalad is a Persian, right-to-left Tehran Metro route planner and word game. It is a lightweight static web app that can be hosted on any web server capable of serving HTML, CSS, JavaScript, JSON, and static assets.

🌐 **وب‌سایت:** [metrobalad.ir](https://metrobalad.ir) · [metrobalad.site](https://metrobalad.site)

## امکانات

- نمایش شبکهٔ مترو روی نقشهٔ تعاملی و انتخاب ایستگاه از روی نقشه یا جست‌وجوی نام
- محاسبه و نمایش مسیرهای پیشنهادی بین ایستگاه‌ها، همراه با ایستگاه‌های تعویض و جهت حرکت
- پشتیبانی از شاخهٔ پرند در خط ۱ و نمایش تعویض در شاهد-باقرشهر برای ادامهٔ مسیر به سمت کهریزک
- بازی واژه‌سازی فارسی، ذخیرهٔ آمار و پیشرفت روی دستگاه کاربر
- رابط واکنش‌گرا با پشتیبانی از فارسی، RTL و فونت Vazirmatn
- قابلیت نصب به‌شکل PWA و بارگذاری پوستهٔ برنامه از کش؛ بارگیری نقشهٔ پایه به اتصال اینترنت و سرویس‌دهندهٔ نقشه وابسته است

## فناوری‌ها

- HTML، CSS و JavaScript بدون نیاز به مرحلهٔ build
- [Leaflet](https://leafletjs.com/) برای نقشهٔ تعاملی
- Service Worker و Web App Manifest برای قابلیت‌های PWA
- فایل JSON برای داده‌های بازی واژه‌سازی

## اجرا و میزبانی

1. همهٔ فایل‌های پوشهٔ پروژه را با حفظ ساختار پوشه‌ها روی هاست قرار بده.
2. مطمئن شو `index.html` در ریشهٔ سایت باشد و پوشه‌های `fonts/` و `lib/` نیز همراه فایل‌هایشان آپلود شوند.
3. برای نصب PWA و فعال‌شدن Service Worker، سایت را با HTTPS منتشر کن. برای آزمایش محلی از یک وب‌سرور محلی استفاده کن؛ بازکردن مستقیم `index.html` با `file://` برای Service Worker مناسب نیست.
4. دو دامنه باید در هاست به پوشهٔ همین سایت متصل باشند. برای جلوگیری از نسخه‌های تکراری در موتورهای جست‌وجو، یک دامنه را اصلی انتخاب و دامنهٔ دیگر را با ریدایرکت ۳۰۱ به آن هدایت کن. فایل‌های `robots.txt` و `sitemap.xml` فعلی، `metrobalad.ir` را دامنهٔ اصلی در نظر می‌گیرند.

### ساختار فایل‌ها

```text
.
├── index.html             # رابط، نقشه، مسیریابی و بازی
├── README.md              # معرفی و راهنمای پروژه
├── LICENSE                # مجوز اختصاصی کد و محتوای اصلی
├── manifest.json          # تنظیمات نصب PWA
├── service-worker.js      # کش پوستهٔ برنامه
├── words.json             # داده‌های بازی واژه‌سازی
├── robots.txt             # راهنمای خزش موتورهای جست‌وجو
├── sitemap.xml            # نقشهٔ سایت
├── icon-192.svg
├── icon-512.svg
├── fonts/
│   └── Vazirmatn.woff2
└── lib/leaflet/            # کتابخانه و دارایی‌های نقشه
```

## داده و حریم خصوصی

بازی آمار و پیشرفت را در حافظهٔ محلی مرورگر نگه می‌دارد. این پروژه در نسخهٔ فعلی به سرور برنامه یا حساب کاربری نیاز ندارد. برای دریافت کاشی‌های نقشه، مرورگر به سرویس‌دهندهٔ نقشهٔ انتخاب‌شده وصل می‌شود؛ شرایط استفاده و انتساب هر سرویس‌دهنده باید رعایت شود.

اطلاعات ایستگاه‌ها و مسیرها داخل فایل‌های سمت کاربر قرار دارند و برای اجرای سایت در دسترس مرورگر هستند. این مخزن برای ذخیره‌کردن رمز عبور، کلید خصوصی یا اطلاعات محرمانه طراحی نشده است.

## اعتبارها و اجزای شخص ثالث

- کتابخانهٔ Leaflet در `lib/leaflet/` قرار دارد و مجوز خودش در [`lib/leaflet/LICENSE`](lib/leaflet/LICENSE) آمده است.
- فونت Vazirmatn اثر پروژهٔ Vazirmatn است و تابع SIL Open Font License 1.1 است. فایل مجوز و اطلاعات رسمی در [مخزن اصلی Vazirmatn](https://github.com/rastikerdar/vazirmatn) موجود است.
- کاشی‌های نقشه از سرویس‌دهنده‌هایی مانند OpenStreetMap و Esri بارگیری می‌شوند؛ انتساب روی نقشه نمایش داده می‌شود و استفاده از آن‌ها تابع شرایط همان سرویس‌دهنده‌هاست.

## مجوز پروژه

کد و محتوای اختصاصی MetroBalad تحت مجوز اختصاصی و محدودکنندهٔ [`LICENSE`](LICENSE) قرار دارد و پروژه متن‌باز نیست. کتابخانه‌ها، فونت، داده‌ها یا محتوای متعلق به دیگران از این مجوز خارج‌اند و تابع مجوز صاحبان خود هستند.

**انتشار عمومی مخزن به معنی اجازهٔ کپی یا تغییر پروژه نیست.** با این حال، مخزن عمومی در GitHub قابل مشاهده و fork است. اگر نمی‌خواهی سورس پروژه برای عموم دیده شود، مخزن را در GitHub خصوصی نگه دار.

---

# MetroBalad

An interactive Tehran Metro route planner and Persian word-building game. The app includes a Leaflet map, route suggestions, Persian station search, locally stored game progress, and installable PWA support.

The project is a static website: upload the complete project folder to an HTTPS-enabled host while preserving its directory structure. Map tiles are provided by external services and may require an internet connection.

**License:** MetroBalad's original code and content are proprietary and all rights are reserved. Third-party components remain under their respective licenses. See [`LICENSE`](LICENSE) and the credits above.
