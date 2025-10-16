# Lunave Nails Website

A modern, responsive landing page for Lunave Nails - a premium nail art studio in Jakarta. Built with Vite, React.js, and TailwindCSS.

## 🌟 Features

- **Modern Design**: Clean, elegant interface with baby pink and cream nude color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Sections**:
  - Hero section with call-to-action
  - Services showcase with pricing
  - Portfolio gallery with modal previews
  - Client testimonials
  - WhatsApp booking integration
  - Instagram feed integration
- **Smooth Animations**: Beautiful scroll animations using Framer Motion
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance**: Optimized images and lazy loading

## 🚀 Quick Start

### Prerequisites

- Node.js (v18.x or higher)
- NPM or Yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lunave-nails
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
# WhatsApp number for booking (international format without '+')
VITE_WHATSAPP_NUMBER="6281234567890"

# Google Analytics (optional)
VITE_GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# Instagram embed URL (optional)
VITE_INSTAGRAM_EMBED_URL="https://snapwidget.com/embed/xxxxxx"
```

5. Start the development server:
```bash
npm run dev
```

The app will be running at `http://localhost:5173` (or `http://localhost:5174` if 5173 is in use)

## ⚠️ Important Note

- **Development Server**: Works perfectly with `npm run dev`
- **Production Build**: Currently experiencing build issues with TailwindCSS v4. For deployment, consider using Vercel/Netlify which handle builds differently, or downgrade to TailwindCSS v3 if needed.

The application is fully functional in development mode and ready for customization.

## 📁 Project Structure

```
src/
├── assets/
│   ├── images/         # Static images
│   ├── portfolio/      # Portfolio images
│   └── fonts/          # Local fonts
├── components/
│   ├── HeroSection.jsx
│   ├── ServicesSection.jsx
│   ├── PortfolioSection.jsx
│   ├── Testimonials.jsx
│   ├── CTASection.jsx
│   ├── InstagramFeed.jsx
│   ├── Footer.jsx
│   └── Navbar.jsx
├── data/
│   ├── services.js     # Services data
│   └── testimonials.js # Testimonials data
├── App.jsx             # Main app component
├── index.css           # Global styles & Tailwind
└── main.jsx            # Entry point
```

## 🎨 Customization

### Colors

The theme colors are defined in `tailwind.config.js`:
- `baby-pink`: #F8C9D4
- `cream-nude`: #FDF1ED
- `charcoal-gray`: #333333

### Fonts

- **Display**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

### Content Management

- **Services**: Edit `src/data/services.js` to update services and prices
- **Testimonials**: Edit `src/data/testimonials.js` to update client reviews
- **Portfolio**: Add images to `src/assets/portfolio/` and import in `PortfolioSection.jsx`

## 📱 Features

### WhatsApp Integration

All booking buttons redirect to WhatsApp with pre-filled messages. Update the WhatsApp number in your `.env` file.

### Instagram Feed

Uses SnapWidget or similar service for embedding Instagram posts. Configure the embed URL in your `.env` file.

### Contact Forms

Ready for EmailJS integration for contact forms (optional).

## 🛠️ Technologies Used

- **Framework**: Vite + React.js
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Heroicons (inline SVG)
- **SEO**: React Helmet Async
- **Images**: Unsplash for demo images

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables
6. Deploy

### Build Commands

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test
```

## 📧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_WHATSAPP_NUMBER` | WhatsApp number for bookings | 6281234567890 |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics ID | G-XXXXXXXXXX |
| `VITE_INSTAGRAM_EMBED_URL` | Instagram embed URL | - |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID | - |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID | - |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key | - |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, please contact us at info@lunavenails.com or via WhatsApp at +62 812-3456-7890.

---

Made with ❤️ for Lunave Nails
