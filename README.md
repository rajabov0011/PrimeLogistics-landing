# 🚚 GlobalFreight - Premium Logistics Landing Page

Modern and professional landing page for a logistics company. International freight forwarding services with DAF Euro 6 trucks.

![Logistics Landing Page](https://img.shields.io/badge/React-19.2-blue) ![Vite](https://img.shields.io/badge/Vite-7.3-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

## ✨ Features

- 🎨 **Modern Design** - Gradient colors, animations, and hover effects
- 📱 **Fully Responsive** - Perfect display on all devices (desktop, tablet, mobile)
- ⚡ **Lightning Fast** - High performance with Vite bundler
- 🚀 **6 Service Sections** - Complete logistics solutions showcase
- 📋 **Contact Form** - User-friendly quote request form
- 🎯 **SEO Optimized** - Search engine friendly structure

## 🛠️ Tech Stack

- **React 19.2.0** - UI component library
- **Vite 7.3.0** - Fast build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **PostCSS & Autoprefixer** - CSS optimization

## 📦 Installation & Setup

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/rajabov0011/PrimeLogistics-landing.git
cd PrimeLogistics-landing
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Run development server

\`\`\`bash
npm run dev
\`\`\`

Open `http://localhost:5173` in your browser.

### 4. Build for production

\`\`\`bash
npm run build
\`\`\`

Built files will be in the `dist/` folder.

### 5. Preview production build

\`\`\`bash
npm run preview
\`\`\`

## 📁 Project Structure

\`\`\`
PrimeLogistics-landing/
├── src/
│   ├── assets/          # Images and media files
│   ├── App.jsx          # Main component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Tailwind CSS imports
├── public/              # Static assets
├── tailwind.config.cjs  # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
\`\`\`

## 🎨 Customization Guide

### Change Colors

Modify gradient colors in `src/App.jsx`:

\`\`\`jsx
// Current: blue-cyan gradient
className="bg-gradient-to-r from-blue-600 to-cyan-600"

// New: green-blue gradient
className="bg-gradient-to-r from-green-600 to-blue-600"
\`\`\`

### Replace Images

1. Add your image to `src/assets/` folder
2. Import in `App.jsx`:

\`\`\`jsx
import myImage from './assets/my-image.jpg';
\`\`\`

3. Use in component:

\`\`\`jsx
<img src={myImage} alt="Description" />
\`\`\`

### Edit Content

All content is in `src/App.jsx`. Use search (Ctrl+F) to find and modify text.

## 🚀 Deployment

### Vercel (Recommended - EASIEST!)

1. Sign in to [Vercel](https://vercel.com) with GitHub
2. Click "New Project" → Select your repository
3. Click "Deploy"
4. Done! Auto-deploys on every `git push`

### Netlify

1. Sign in to [Netlify](https://netlify.com)
2. "New site from Git" → Select repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click Deploy

### GitHub Pages

\`\`\`bash
npm run build
# Upload dist/ folder to GitHub Pages
\`\`\`

## 📝 Future Enhancements

- [ ] Backend integration (Node.js/Express)
- [ ] Form validation (React Hook Form)
- [ ] Email functionality (EmailJS, Nodemailer)
- [ ] Multi-language support (i18n)
- [ ] Admin dashboard
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Real-time shipment tracking system
- [ ] Payment gateway integration

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rajabov** - [GitHub](https://github.com/rajabov0011)

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit

## 📧 Contact

For any inquiries or support, please reach out:
- **Email**: [Asadbek Rajabov](https://www.mail.ru/rajabov_1999@list.ru)
- **LinkedIn**: [Asadbek Rajabov](https://www.linkedin.com/in/asadbek-rajabov-8991332b7/)
- **Portfolio**: [Prime Logistics](https://prime-logistics-landing.vercel.app/)

---

⭐ **If you found this project helpful, please give it a star!** ⭐

Made with ❤️ by Rajabov
