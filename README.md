# SRN Frontend

Strategic Research Nexus - Blockchain-based Document Verification Platform

## Features

- 🏠 **Home Page** - Introduction and overview
- 📖 **About** - Mission, objectives, and approach
- 👥 **Team** - Meet the researchers and advisory board
- 📚 **Resources** - Publications, datasets, and research tools
- 📧 **Contact** - Get in touch with the team
- 🔐 **User Authentication** - Login/Register
- 📤 **Upload** - Upload research artifacts to blockchain
- ✅ **Verify** - Verify document authenticity
- 📊 **Dashboard** - Manage artifacts
- 🔒 **Secure** - Blockchain-based verification
- 🎨 **Modern UI** - Responsive design

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **React Router** - Routing
- **Axios** - HTTP client
- **CSS3** - Styling

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API running on http://localhost:5000

## Installation

1. Navigate to the frontend directory:
```bash
cd srn-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: http://localhost:3000

## API Configuration

The frontend is configured to connect to the backend API at `http://localhost:5000/api`.

If your backend runs on a different port, update the `API_BASE_URL` in:
- `src/services/api.js`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
srn-frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/         # React context providers
│   │   └── AuthContext.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Team.jsx
│   │   ├── Resources.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Upload.jsx
│   │   └── Verify.jsx
│   ├── services/        # API services
│   │   └── api.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Usage

### Register a New Account
1. Click "Register" in the navigation
2. Enter your email, password, and optional wallet address
3. Submit the form
4. Login with your credentials

### Upload an Artifact
1. Login to your account
2. Navigate to "Upload" or use the dashboard
3. Enter a title for your document
4. Select a file to upload
5. Click "Upload to Blockchain"
6. Your document will be hashed and anchored on the blockchain

### Verify a Document
1. Go to "Verify Document" (no login required)
2. Enter the document hash
3. Click "Verify on Blockchain"
4. View the verification results

## Features Overview

- Footer with navigation links

### About Page
- Mission and objectives
- What we do
- Our approach
- Vision cards with key focus areas

### Team Page
- Core team members with expertise
- Advisory board members
- Join the network section

### Resources Page
- Recent publications catalog
- Open datasets repository
- Research tools and guides
- Access request functionality

### Contact Page
- Contact form
- Contact methods (email, social media)
- Office hours information
- Get in touch options
### Home Page
- Introduction to Strategic Research Nexus
- Feature highlights
- Call-to-action buttons

### Authentication
- Secure login and registration
- JWT token-based authentication
- Protected routes

### Dashboard
- Overview of available features
- Quick access to upload and verify
- User-friendly interface

### Upload
- File upload with title
- Automatic hashing (SHA-256)
- Blockchain anchoring
- Transaction hash display

### Verify
- Document hash verification
- Blockchain lookup
- Owner and timestamp information
- Visual verification status

## Design

The design is inspired by the Strategic Research Nexus website (www.srn.ie) with:
- Modern gradient backgrounds
- Clean, professional layout
- Responsive design for all devices
- Intuitive navigation
- Accessibility-focused

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 SRN
