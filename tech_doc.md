Technical Documentation: LUNAVÈ NAILS
Project: Website Landing Page Lunavè Nails

Version: 1.0

Date: 15 Oktober 2025

1. Introduction
1.1. Project Overview
Dokumen ini merinci spesifikasi teknis untuk pengembangan website landing page Lunavè Nails. Proyek ini bertujuan untuk menciptakan sebuah single-page application (SPA) yang modern, responsif, dan elegan untuk menampilkan layanan, portofolio, dan memfasilitasi booking online.

1.2. Core Technology Stack
Framework: Vite + React.js

Styling: TailwindCSS

Animations: Framer Motion

Deployment: Vercel / Netlify

2. Project Setup & Installation
2.1. Prerequisites
Pastikan environment development Anda memiliki:

Node.js (v18.x atau lebih baru)

NPM atau Yarn

Git

2.2. Installation Steps
Clone Repository:

Bash

git clone <url-repository-anda>
cd lunave-nails-project
Install Dependencies:

Bash

npm install
Setup Environment Variables:
Buat file baru bernama .env di root direktori proyek. Salin konten dari .env.example (jika ada) dan isi nilainya.

Ini, TOML

# Kunci untuk Google Analytics 4
VITE_GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# Nomor WhatsApp untuk tombol CTA (format internasional tanpa '+' atau '0')
VITE_WHATSAPP_NUMBER="6281234567890"

# (Opsional) Kredensial untuk layanan form handling seperti EmailJS
VITE_EMAILJS_SERVICE_ID="your_service_id"
VITE_EMAILJS_TEMPLATE_ID="your_template_id"
VITE_EMAILJS_PUBLIC_KEY="your_public_key"

# (Opsional) URL embed untuk Instagram Feed dari SnapWidget atau sejenisnya
VITE_INSTAGRAM_EMBED_URL="https://snapwidget.com/embed/xxxxxx"
Run Development Server:

Bash

npm run dev
Aplikasi akan berjalan di http://localhost:5173.

3. Project Structure
Struktur folder utama di dalam direktori src/ adalah sebagai berikut:

src/
├── assets/
│   ├── images/         # Gambar statis (logo, hero, background)
│   ├── portfolio/      # Kumpulan foto portofolio
│   └── fonts/          # File font lokal (jika ada)
│
├── components/
│   ├── HeroSection.jsx
│   ├── ServicesSection.jsx
│   ├── PortfolioSection.jsx
│   ├── Testimonials.jsx
│   ├── CTASection.jsx
│   ├── InstagramFeed.jsx
│   ├── Footer.jsx
│   └── ui/             # Komponen UI kecil (Button, Card, etc.)
│
├── data/
│   ├── services.js     # Data untuk paket layanan (harga, deskripsi)
│   └── testimonials.js # Data untuk testimoni pelanggan
│
└── App.jsx             # Komponen utama yang menyatukan semua section
└── index.css           # Global style dan konfigurasi TailwindCSS
└── main.jsx            # Entry point aplikasi React
4. Component & Functionality Details
4.1. Styling (TailwindCSS)
Konfigurasi utama berada di tailwind.config.js.

Warna Kustom: Warna brand (Baby Pink, Cream Nude) telah didefinisikan di bawah theme.extend.colors.

JavaScript

// tailwind.config.js
theme: {
  extend: {
    colors: {
      'baby-pink': '#F8C9D4',
      'cream-nude': '#FDF1ED',
      'charcoal-gray': '#333333',
    },
    fontFamily: {
      'display': ['Playfair Display', 'serif'],
      'body': ['Poppins', 'sans-serif'],
    }
  }
}
Font: Playfair Display dan Poppins diimpor (misalnya dari Google Fonts) di index.html.

4.2. ServicesSection.jsx
Data layanan (paket, harga, deskripsi) di-fetch dari src/data/services.js.

Untuk mengubah konten, cukup edit file JavaScript tersebut tanpa menyentuh JSX.

JavaScript

// src/data/services.js
export const services = [
  { title: 'Basic Manicure', price: 'IDR 150K', description: '...' },
  { title: 'Premium Gel-X', price: 'IDR 300K', description: '...' },
  // ...
];
4.3. PortfolioSection.jsx
Menggunakan layout Masonry untuk tampilan galeri yang dinamis. Ini dapat dicapai dengan CSS Grid atau library seperti react-photo-album.

Gambar portofolio disimpan di src/assets/portfolio/. Untuk menambahkan gambar baru, cukup letakkan file di folder tersebut dan impor ke dalam komponen.

Fitur modal preview saat gambar diklik diimplementasikan menggunakan library seperti yet-another-react-lightbox.

4.4. Booking CTA
Tombol "Book via WhatsApp" mengarah ke URL yang diformat secara dinamis:
https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Halo%20Lunavè%20Nails,%20saya%20tertarik%20untuk%20booking.

Form booking (jika ada) akan menggunakan EmailJS untuk mengirim data langsung ke email admin tanpa memerlukan backend.

4.5. InstagramFeed.jsx
Rekomendasi: Menggunakan embeddable widget dari layanan pihak ketiga seperti SnapWidget atau Elfsight.

URL embed dari widget tersebut disimpan di variabel lingkungan VITE_INSTAGRAM_EMBED_URL dan ditampilkan melalui <iframe>. Ini adalah pendekatan paling stabil dan sederhana.

5. SEO & Performance
5.1. SEO
Gunakan library react-helmet-async untuk mengelola meta tags (<title>, <meta name="description">, OG tags) secara dinamis.

Pastikan semua gambar (<img>) memiliki atribut alt yang deskriptif untuk aksesibilitas dan SEO.

Schema markup LocalBusiness akan ditambahkan dalam format JSON-LD di index.html untuk membantu mesin pencari memahami informasi bisnis (lokasi, jam buka, dll.).

5.2. Performance
Image Optimization: Sebelum diunggah ke proyek, kompres semua gambar menggunakan tools seperti TinyPNG atau Squoosh.

Lazy Loading: Terapkan lazy loading pada gambar yang berada di luar viewport awal (misalnya, di galeri portofolio) untuk mempercepat waktu muat awal.

JavaScript

<img src={imageUrl} loading="lazy" alt="deskripsi gambar" />
Code Splitting: Vite secara otomatis melakukan code splitting. Pastikan struktur komponen tetap modular untuk hasil terbaik.

6. Deployment
Proyek ini dirancang untuk deployment mudah di platform Jamstack seperti Vercel atau Netlify.

6.1. Deployment Steps (Vercel Example)
Push kode Anda ke repository Git (GitHub, GitLab).

Login ke akun Vercel Anda dan pilih "Add New... > Project".

Impor repository Git Anda.

Vercel akan otomatis mendeteksi bahwa ini adalah proyek Vite. Konfigurasi build berikut akan diterapkan secara default:

Build Command: npm run build

Output Directory: dist

Buka tab "Settings > Environment Variables" dan tambahkan semua variabel yang ada di file .env Anda.

Klik Deploy. Proses build dan deployment akan berjalan otomatis.

7. Maintenance & Content Updates
Mengubah Layanan/Harga: Edit file src/data/services.js.

Menambah Testimoni: Edit file src/data/testimonials.js.

Menambah Foto Portofolio: Tambahkan file gambar ke src/assets/portfolio/ dan impor ke dalam komponen PortfolioSection.jsx.

Mengubah Kontak: Update informasi di Footer.jsx dan variabel lingkungan .env jika diperlukan.