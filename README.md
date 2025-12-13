# Hesy Tools 🦷

![Lisans](https://img.shields.io/badge/license-GPLv3-blue.svg)
![Netlify Status](https://api.netlify.com/api/v1/badges/b5b5b5b5-b5b5-4b5b-8b5b-5b5b5b5b5b5b/deploy-status)

**Hesy Tools**, diş hekimliği pratiğinde sık ihtiyaç duyulan bilgi ve hesaplamaları tek bir arayüzde toplayan dijital bir yardımcı araçtır. 

Karmaşık klinik süreçleri hızlandırmak ve pratik bilgiye saniyeler içinde ulaşmak amacıyla geliştirilmiştir.

## 🔗 Canlı Demo (Live)

Uygulamayı indirmeden, doğrudan tarayıcınız üzerinden kullanabilirsiniz:
👉 **[hesytools.netlify.app](https://hesytools.netlify.app/)**

## 🚀 Özellikler

* **🩸 Hematolojik Risk Analizi (Hema Data):** Hastaların hematolojik verilerine göre risk durumlarını matematiksel olarak hesaplar.
* **🦷 Periodontal Evreleme:** Periodontal hastalıkların evrelemesini pratik bir şekilde yapmanızı sağlar.
* **💊 Reçete Protokolleri:** Sık kullanılan reçete protokollerine hızlı erişim sağlar.
* **👶 PedoGuide:** Pedodonti (Çocuk Diş Hekimliği) için rehber ve hesaplamalar içerir.
* **📝 Anamnez Terimleri:** Anamnez alırken kullanılan terimler için dijital bir referans kaynağıdır.
* **🌙 Karanlık Mod (Dark Mode):** Göz yormayan, sistem temasına duyarlı arayüz tasarımı.

## 🛠️ Kullanılan Teknolojiler

* **HTML5 & CSS3**
* **JavaScript (ES6+)**
* **[Bootstrap 4](https://getbootstrap.com/):** Responsive ve şık arayüz tasarımı için.
* **[jQuery](https://jquery.com/):** DOM manipülasyonu için.

## 💻 Geliştiriciler İçin (Opsiyonel)

Projeyi geliştirmek veya kodları incelemek isterseniz:

1.  Repoyu klonlayın:
    ```bash
    git clone [https://github.com/FurkanKokcu/hesytools.git](https://github.com/FurkanKokcu/hesytools.git)
    ```
2.  Klasörün içindeki `index.html` dosyasını tarayıcınızda açın. Herhangi bir sunucu kurulumu gerektirmez.

## 📂 Proje Yapısı

```text
hesytools/
├── hesy tools/          # Uygulama mantığı ve script dosyaları
│   ├── hemadata.js      # Hematoloji hesaplamaları
│   ├── pedoguide.js     # Pedodonti modülü
│   ├── receteler.js     # Reçete verileri
│   └── main.js          # Ana uygulama kontrolcüsü
├── vendor/              # Kütüphaneler (Bootstrap, jQuery vb.)
├── index.html           # Ana giriş sayfası
├── manifest.json        # PWA yapılandırması
└── README.md            # Proje dökümantasyonu
```
## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz!

    Bu repoyu Fork'layın.

    Yeni bir Branch oluşturun (git checkout -b ozellik/YeniOzellik).

    Değişikliklerinizi Commit edin (git commit -m 'Yeni özellik eklendi').

    Branch'inizi Push edin (git push origin ozellik/YeniOzellik).

    Bir Pull Request oluşturun.

## 📄 Lisans

Bu proje GNU GPLv3 lisansı ile lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakabilirsiniz.
