# GitHub Pages Deployment Guide

## 🚀 Deployment Hazırlığı Tamamlandı!

### ✅ Yapılan Konfigürasyonlar:

#### 1. **Vite Configuration**
- `base: '/ilhankarabicak-websayfasi/'` eklendi
- GitHub Pages repository path'i için optimize edildi

#### 2. **GitHub Actions Workflow**
- `.github/workflows/deploy.yml` oluşturuldu
- Otomatik deployment için Node.js 18 kullanımı
- Main branch'e push olduğunda otomatik deploy

#### 3. **Package.json Scripts**
- `predeploy` ve `deploy` scriptleri eklendi
- `gh-pages` paketi devDependencies'e eklendi

---

## 📋 GitHub Pages Deployment Adımları:

### Adım 1: Repository Settings
1. GitHub repository'sine gidin: `https://github.com/yusufsenyer/ilhankarabicak-websayfasi`
2. **Settings** sekmesine tıklayın
3. Sol menüden **Pages** seçin

### Adım 2: Source Configuration
1. **Source** bölümünde **GitHub Actions** seçin
2. **Save** butonuna tıklayın

### Adım 3: Deployment Trigger
1. Bu dosyaları commit edip push edin
2. GitHub Actions otomatik olarak çalışacak
3. **Actions** sekmesinden deployment durumunu takip edin

---

## 🔧 Manuel Deployment (Alternatif):

Eğer GitHub Actions kullanmak istemezseniz:

```bash
cd project
npm install
npm run deploy
```

---

## 📍 Deployment URL'leri:

### GitHub Pages URL:
```
https://yusufsenyer.github.io/ilhankarabicak-websayfasi/
```

### Custom Domain (Gelecekte):
```
https://ilhankarabicak.com
```

---

## ✅ Deployment Checklist:

- [x] Vite config base path ayarlandı
- [x] GitHub Actions workflow oluşturuldu
- [x] Package.json deploy scripts eklendi
- [x] gh-pages paketi eklendi
- [ ] Repository Settings > Pages > Source: GitHub Actions
- [ ] İlk deployment test edildi
- [ ] URL erişilebilirliği kontrol edildi

---

## 🔍 Troubleshooting:

### Yaygın Sorunlar:

#### 1. **404 Error**
- Base path doğru ayarlandığından emin olun
- Repository adı ile base path eşleşmeli

#### 2. **Build Errors**
- `npm run build` komutunu local'de test edin
- Dependencies eksik olabilir

#### 3. **Actions Fails**
- Repository Settings > Actions > General
- Workflow permissions kontrol edin

---

## 🎯 Sonraki Adımlar:

### 1. İlk Deployment
- Dosyaları commit/push edin
- GitHub Actions'ı bekleyin
- URL'yi test edin

### 2. Custom Domain (İsteğe bağlı)
- Domain satın alın
- DNS ayarlarını yapın
- GitHub Pages'e custom domain ekleyin

### 3. SSL Certificate
- GitHub Pages otomatik SSL sağlar
- Custom domain için Let's Encrypt

---

## 📞 Destek:

Deployment sırasında sorun yaşarsanız:
1. GitHub Actions logs'ları kontrol edin
2. Repository Settings > Pages ayarlarını doğrulayın
3. Bu rehberi tekrar gözden geçirin

---

## 🎉 Başarılı Deployment Sonrası:

Web siteniz şu adreste yayında olacak:
**https://yusufsenyer.github.io/ilhankarabicak-websayfasi/**

SEO optimizasyonları ile birlikte Google'da indekslenmeye başlayacak!
