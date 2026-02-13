# SRN Frontend - GitHub Pages Deployment

This repository contains the Strategic Research Nexus frontend application deployed on GitHub Pages.

## 🌐 Live Demo

**Live Site**: https://saaysalim.github.io/srn-frontend/

## 📦 Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

To manually deploy:

```bash
npm run deploy
```

This will:
1. Build the production bundle
2. Deploy to the `gh-pages` branch
3. Update the live site

## 🚀 Local Development

### Prerequisites
- Node.js v16 or higher
- npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/saaysalim/srn-frontend.git
cd srn-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The app will run at http://localhost:3000

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
srn-frontend/
├── src/
│   ├── components/      # Reusable components
│   ├── context/         # React context (Auth)
│   ├── pages/           # Page components (10 pages)
│   ├── services/        # API integration
│   └── *.css            # Styling files
├── public/              # Static assets
├── .github/
│   └── workflows/       # GitHub Actions workflows
└── dist/                # Production build (generated)
```

## 📄 Pages

- **Home** (`/`) - Landing page
- **About** (`/about`) - Organization information
- **Team** (`/team`) - Research team
- **Resources** (`/resources`) - Publications and datasets
- **Contact** (`/contact`) - Contact form
- **Verify** (`/verify`) - Document verification
- **Login** (`/login`) - User login
- **Register** (`/register`) - User registration
- **Dashboard** (`/dashboard`) - User dashboard (protected)
- **Upload** (`/upload`) - Upload artifacts (protected)

## 🔧 Technologies

- **React 18** - UI framework
- **Vite** - Build tool
- **React Router** - Routing
- **Axios** - HTTP client
- **GitHub Pages** - Hosting

## 🔐 Backend API

For full functionality, the app requires the SRN Backend API running. 

**Note**: The GitHub Pages deployment is static and requires API configuration for authentication and upload features.

## 📝 Configuration

### API Endpoint

Update the API endpoint in `src/services/api.js`:

```javascript
const API_BASE_URL = 'YOUR_BACKEND_API_URL';
```

### GitHub Pages Base URL

The app is configured to work with the GitHub Pages URL:
- Base path: `/srn-frontend/`
- Configured in `vite.config.js`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Copyright © 2026 Strategic Research Nexus

## 👥 Contact

For questions or support:
- Website: https://www.srn.ie
- Email: info@srn.ie

---

Built with ❤️ by the SRN Team
