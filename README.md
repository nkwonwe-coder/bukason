# Bukason Group Website

A modern, enterprise-grade website for Bukason Group - a diversified company delivering services across government contracting, supply chain and logistics, technology solutions, and infrastructure project services.

## Features

- **7 Comprehensive Pages**: Home, About, Divisions, Projects, Compliance, Careers, Contact
- **Modern Design**: Clean, professional interface with gradient accents matching brand colors
- **Responsive**: Fully responsive design for desktop, tablet, and mobile devices
- **Fast Navigation**: React Router for seamless page transitions
- **Brand Integration**: Custom Bukason Group logo throughout
- **Enterprise-Ready**: Professional design suitable for government and institutional clients

## Tech Stack

- **React 18.3.1** - Modern React with hooks
- **TypeScript** - Type-safe development
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite 6** - Fast build tool and dev server
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
pnpm install
```

### Development

Run the development server:
```bash
npm run dev
# or
pnpm dev
```

The site will be available at `http://localhost:5173`

### Building for Production

Build the production-ready application:
```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
# or
pnpm preview
```

## Project Structure

```
/src
  /app
    /components
      - Layout.tsx          # Main layout with header & footer
      - Button.tsx          # Reusable button component
      - ServiceCard.tsx     # Service card component
    /pages
      - Home.tsx           # Homepage
      - About.tsx          # About page
      - Divisions.tsx      # Business divisions
      - Projects.tsx       # Projects & capabilities
      - Compliance.tsx     # Compliance & standards
      - Careers.tsx        # Careers page
      - Contact.tsx        # Contact page with form
    - App.tsx             # Main app component with routing
  /styles
    - fonts.css           # Font imports (Inter)
    - index.css           # Main CSS imports
    - tailwind.css        # Tailwind base imports
    - theme.css           # Theme variables & typography
```

## Design System

### Colors
- **Primary Blue**: `#1E3A8A` - Deep blue for trust and professionalism
- **Teal Accent**: `#14B8A6` - Modern accent color (from logo)
- **Gold Accent**: `#F59E0B` - Warm accent (from logo)
- **Charcoal Gray**: `#1F2937` - Text and UI elements
- **White**: `#FFFFFF` - Backgrounds and contrast

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Medium weight (500)
- **Body**: Normal weight (400)
- **Hierarchy**: h1 (2.25rem) → h2 (1.5rem) → h3 (1.125rem)

### Components
- Rounded corners: `rounded-lg` (0.5rem) to `rounded-2xl` (1rem)
- Shadows: Subtle to prominent for depth
- Gradients: Teal to blue for primary actions
- Hover states: Scale transforms and color transitions

## Key Pages

### Home
- Hero section with company overview
- Core sectors showcase
- Company philosophy
- Capabilities snapshot
- Call-to-action

### About
- Company overview with professional imagery
- Mission and vision
- Leadership and governance
- Ethics and compliance

### Divisions
- Detailed information on all 4 business divisions
- Reusable template for consistency
- Service descriptions and capabilities
- Who we serve and how we deliver

### Projects
- Featured project showcases
- Delivery approach
- Quality and risk management
- Compliance focus

### Compliance
- Procurement readiness
- Regulatory compliance
- Security and data protection
- Quality standards

### Careers
- Company culture and values
- Career opportunities
- Benefits and development
- Application information

### Contact
- Contact information (phone, email, office)
- Interactive contact form
- Business inquiry guidelines

## Contact Information

- **Email**: info@bukasongroup.com
- **Phone**: +1 512 673 8253
- **Office**: Washington, DC Metro Area

## Deployment

This site is ready for deployment to any static hosting service:

- **Vercel**: Connect your repository and deploy
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **AWS S3 + CloudFront**: Upload the `dist/` folder
- **GitHub Pages**: Use GitHub Actions to build and deploy

### Environment Variables

No environment variables are required for basic deployment.

## License

Copyright © 2024 Bukason Group. All rights reserved.

## Support

For questions or issues with the website, contact the development team or visit the Contact page.
