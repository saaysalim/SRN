# SRN Frontend - Quick Start Guide

## Installation & Setup

### Step 1: Install Dependencies
```bash
cd srn-frontend
npm install
```

### Step 2: Start the Development Server
```bash
npm run dev
```

The app will run at: **http://localhost:3000**

## Available Pages

| Page | Route | Description | Auth Required |
|------|-------|-------------|---------------|
| Home | `/` | Landing page with overview | No |
| About | `/about` | Mission and objectives | No |
| Team | `/team` | Research team and advisory board | No |
| Resources | `/resources` | Publications and datasets | No |
| Contact | `/contact` | Contact form and information | No |
| Verify | `/verify` | Document verification | No |
| Login | `/login` | User login | No |
| Register | `/register` | New user registration | No |
| Dashboard | `/dashboard` | User dashboard | Yes |
| Upload | `/upload` | Upload artifacts | Yes |

## Navigation Structure

```
Home
  ├── About (Who we are, what we do)
  ├── Team (Meet the researchers)
  ├── Resources (Publications, datasets, tools)
  ├── Contact (Get in touch)
  ├── Verify (Public document verification)
  └── User Section (Login/Register required)
      ├── Dashboard
      └── Upload
```

## First Time Setup

1. **Start the backend API** (must be running on port 5000)
2. **Install frontend dependencies**: `npm install`
3. **Start development server**: `npm run dev`
4. **Register a new account** at http://localhost:3000/register
5. **Login** with your credentials
6. **Upload documents** from the dashboard

## Key Features

### Public Features (No Login Required)
- Browse all informational pages (Home, About, Team, Resources, Contact)
- Verify document authenticity using hash
- View contact information

### Authenticated Features (Login Required)
- Upload documents to blockchain
- View personal dashboard
- Manage uploaded artifacts

## Page Descriptions

### 🏠 Home
The landing page featuring:
- Hero section with mission statement
- Feature cards highlighting key capabilities
- Call-to-action buttons
- Footer with quick links

### 📖 About
Learn about SRN:
- Who we are
- What we do
- Our approach
- Core objectives and initiatives

### 👥 Team
Meet the people behind SRN:
- Core research team members
- Areas of expertise
- Advisory board
- Join our network section

### 📚 Resources
Access research materials:
- Recent publications (papers, reports, briefs)
- Open datasets (economic, education, governance)
- Research tools and frameworks
- Request access functionality

### 📧 Contact
Get in touch:
- Contact form
- Email and social media links
- Office hours
- Contact methods

### ✅ Verify
Verify document authenticity:
- Enter document hash
- Check blockchain registration
- View verification details
- See owner and timestamp

### 📤 Upload (Auth Required)
Upload research artifacts:
- Enter document title
- Select file
- Automatic SHA-256 hashing
- Blockchain anchoring
- Get transaction hash

### 📊 Dashboard (Auth Required)
Your personal workspace:
- Quick access cards
- Upload documents
- Verify documents
- View blockchain information

## Styling & Design

The application uses:
- **Color Scheme**: Purple/blue gradients (#667eea to #764ba2)
- **Typography**: System fonts for readability
- **Layout**: Responsive grid layouts
- **Components**: Card-based design
- **Animations**: Smooth hover effects and transitions

## Development Tips

### Hot Reload
The development server supports hot reload. Changes to files will automatically refresh the browser.

### Component Structure
Each page has its own:
- `.jsx` file (React component)
- `.css` file (Scoped styles)

### Adding New Pages
1. Create `NewPage.jsx` in `src/pages/`
2. Create `NewPage.css` for styles
3. Import in `App.jsx`
4. Add route in `App.jsx`
5. Add navigation link in `Navbar.jsx`

## Building for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## Troubleshooting

**Port Already in Use:**
- Change port in `vite.config.js`
- Kill process on port 3000

**API Connection Issues:**
- Ensure backend is running on port 5000
- Check CORS settings in backend
- Verify `API_BASE_URL` in `src/services/api.js`

**Styling Issues:**
- Clear browser cache
- Check CSS file imports
- Verify class names match

## Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Next Steps

After setup:
1. Explore all pages to understand the layout
2. Register a test account
3. Upload a sample document
4. Verify the document using its hash
5. Check the dashboard features

## Support

For issues or questions:
- Check the main README.md
- Review the SETUP_GUIDE.md in the root directory
- Contact the development team

---

**Happy Coding! 🚀**
