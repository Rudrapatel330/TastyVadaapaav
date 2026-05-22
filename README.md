# 🔥 Tasty Vadaapaav — Vadodara

> A beautifully crafted, fully animated frontend website for an authentic Vada Pav brand from Vadodara, Gujarat.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)

---

## 📸 Preview

| Hero Section | Menu | Chutney |
|:---:|:---:|:---:|
| 🏠 Animated hero with floating Vada Pav | 🍽️ Filterable menu with 3D tilt cards | 🌶️ Signature chutneys with spice meters |

---

## ✨ Features

### 🎨 Design & UI
- **Premium warm color palette** — earthy tones, golden gradients, and rich backgrounds
- **Custom cursor** with magnetic hover effects and a trailing dot
- **Glassmorphism** navbar with dynamic background blur
- **3D tilt cards** on menu items and chutney cards (mouse-tracked perspective)
- **Mandala-patterned backgrounds** and spice particle effects

### 🎬 Animations (Powered by GSAP)
- **Hero entrance timeline** — orchestrated reveal of title, Vada Pav image, tagline, CTA, and masala spices
- **Parallax mouse tracking** — hero elements respond to cursor movement
- **Perpetual floating animations** — Vada Pav, masala, and about-section images gently float
- **Scroll-triggered reveals** — sections, cards, and stats animate into view
- **Counter animations** — stats (15,000+ Vadapaavs served daily, 12 secret spices, etc.) count up on scroll
- **Spice meter fill bars** — animate to their target level on scroll
- **Micro-interactions** — button ripples, hover lifts, icon rotations, and elastic bounces

### 📄 Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page — Hero, Menu preview, Chutneys, Location, About Us, Footer |
| `menu.html` | Full dedicated menu page with category filtering |

### 🍽️ Menu Categories
- ⭐ **Signature** — Classic, Cheese, Butter Vadapaav
- 🌶️ **Special** — Schezwan, Double, Jain Vadapaav
- 🥘 **Sides** — Samosa, Misal Pav, Dabeli
- ☕ **Beverages** — Cutting Chai, Masala Chaas, Nimbu Shikanji
- 🎉 **Combos** — Classic Combo, Royal Combo, Party Pack

### 📱 Responsive Design
- Fully responsive from **1440px** down to **320px**
- Mobile hamburger menu with fullscreen overlay
- Touch-device optimizations (cursor hidden on `pointer: coarse`)
- Adaptive image sizing and layout reflows

---

## 🛠️ Tech Stack

| Technology | Purpose |
|:---:|---|
| **HTML5** | Semantic structure with SEO meta tags |
| **CSS3** | Vanilla CSS — custom properties, gradients, grid, glassmorphism, keyframe animations |
| **JavaScript** | Interactive logic, menu filtering, mobile toggle |
| **GSAP 3.12** | ScrollTrigger, timelines, `quickTo()` for high-performance animations |
| **Google Fonts** | Yeseva One, Outfit, Playfair Display |

---

## 📁 Project Structure

```
TastyVadaapaav/
├── index.html            # Main landing page
├── menu.html             # Full menu page
├── style.css             # Global styles & responsive breakpoints
├── menu.css              # Menu-specific styles
├── script.js             # GSAP animations & interactions
├── menu.js               # Menu filtering & tab logic
├── vadaapaav.png         # Hero Vada Pav image
├── garammasaalaa.png     # Garam masala spices image
├── bgpattern.png         # Hero background pattern
├── bg2.png               # Mandala section background
├── Vadapaav_*.png        # Brand poster
└── README.md             # You are here
```

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rudrapatel330/TastyVadaapaav.git
   cd TastyVadaapaav
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   start index.html        # Windows
   open index.html         # macOS
   xdg-open index.html     # Linux
   ```

   Or use a local server for best results:
   ```bash
   npx serve .
   ```

> **No build step, no dependencies to install** — it's pure HTML, CSS & JS with CDN-loaded GSAP.

---

## 🎯 Key Sections

### 🏠 Hero
Immersive landing with a floating Vada Pav image, animated title reveal, spice particles, and mouse-tracked parallax.

### 🍽️ Menu
Category-based filterable menu grid with animated cards, spice-level indicators, price tags, and add-to-cart buttons with toast notifications.

### 🌶️ The Chutneys
Showcases the three legendary chutneys (Green, Dry Garlic, Tamarind) with animated spice meters and 3D tilt hover effects.

### 📍 Location
Interactive map placeholder with pulsing pin animation, address, timings, and contact info — with a "Get Directions" CTA.

### 💚 About Us
Brand story with stacked floating images, value pills (Fresh Ingredients, Made to Order, Made with Love), and elegant text reveals.

---

## 🌐 Browser Support

| Browser | Support |
|:---:|:---:|
| Chrome 90+ | ✅ |
| Firefox 90+ | ✅ |
| Safari 15+ | ✅ |
| Edge 90+ | ✅ |
| Mobile Safari | ✅ |
| Chrome Android | ✅ |

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Rudra Patel**

- GitHub: [@Rudrapatel330](https://github.com/Rudrapatel330)

---

<p align="center">
  Made with ❤️ and lots of chutney 🌶️
</p>
