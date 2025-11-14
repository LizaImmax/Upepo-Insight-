# 💫 Upepo Insights

Africa's premier research, analytics, and knowledge-intelligence platform for cloud computing and cybersecurity.

![Upepo Insights](https://img.shields.io/badge/Built%20with-Next.js%2014-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🌟 Overview

Upepo Insights is the research and analytics arm of the Upepo Ecosystem, delivering:

- **Research Reports** - Quarterly and annual reports on cloud adoption, cybersecurity trends, and tech skills
- **Upepo Pulse** - Monthly insights digest covering industry trends
- **Metrics Dashboard** - Live data on skill demand, salary trends, and technology adoption
- **Knowledge Hub** - Curated library of tutorials and technical deep-dives
- **Research Lab** - Dedicated research unit analyzing industry data and skill gaps
- **Trend Analysis** - Real-time tracking of cloud services and security patterns

## 🚀 Tech Stack

### Frontend
- **Next.js 14+** (App Router) - React framework with server-side rendering
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Recharts** - Data visualization
- **Lucide Icons** - Beautiful icon system

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Prisma** - Type-safe ORM
- **MongoDB** - NoSQL database
- **NextAuth.js** - Authentication (ready to configure)

### CMS & Storage
- **Sanity.io** - Headless CMS for content management
- **AWS S3** - File storage for reports (optional)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- MongoDB database (local or MongoDB Atlas)
- Git

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/LizaImmax/Upepo-Insight-.git
cd Upepo-Insight-
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
```env
# MongoDB Connection (get from MongoDB Atlas)
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/upepo-insights"

# NextAuth (generate with: openssl rand -base64 32)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"

# Optional: Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
```

4. **Initialize Prisma**
```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Setup

### MongoDB Atlas (Recommended for Production)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string and add it to `.env`

### Local MongoDB (Development)

```bash
# Install MongoDB locally
# Windows: Download from mongodb.com
# Mac: brew install mongodb-community
# Linux: sudo apt install mongodb

# Set DATABASE_URL in .env
DATABASE_URL="mongodb://localhost:27017/upepo-insights"
```

## 🎨 Design System

### Color Palette

**Royal Purple** - Authority & Wisdom
- Primary: `#8b5cf6` to `#5b21b6`

**Gold/Amber** - Prestige & Value
- Accent: `#f59e0b` to `#d97706`

**Deep Navy** - Professionalism & Trust
- Secondary: `#0c4a6e` to `#075985`

**Cyber Teal** - Innovation & Tech
- Highlight: `#06b6d4` to `#0891b2`

### Typography
- **Headings**: Bold, 4xl-7xl sizes
- **Body**: Regular, lg-xl sizes
- **Accent**: Gradient text effects

## 📁 Project Structure

```
upepo-insights/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── reports/           # Reports page
│   ├── metrics/           # Metrics dashboard
│   ├── pulse/             # Pulse blog
│   ├── knowledge-hub/     # Knowledge articles
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility functions
│   └── prisma.ts         # Prisma client
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Environment Variables for Production

Make sure to add these in Vercel dashboard:
- `DATABASE_URL`
- `NEXTAUTH_URL` (your production URL)
- `NEXTAUTH_SECRET`
- Any other API keys

## 📊 Features

### ✅ Implemented
- [x] Responsive design with royal/gold/cyber color scheme
- [x] Homepage with hero, features, and stats
- [x] Reports page with search and filtering
- [x] Metrics dashboard with live charts
- [x] Gated content download modals
- [x] Newsletter subscription forms
- [x] Database schema with Prisma
- [x] API routes for subscriptions and downloads

### 🚧 Ready to Implement
- [ ] Authentication with NextAuth.js
- [ ] Sanity CMS integration
- [ ] File upload to AWS S3
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Search functionality
- [ ] Analytics tracking
- [ ] Blog/Pulse section
- [ ] Knowledge Hub articles

## 🔧 Development

### Add Sample Data

Open Prisma Studio to add sample reports:
```bash
npm run prisma:studio
```

### Run Type Checking
```bash
npx tsc --noEmit
```

### Format Code
```bash
npx prettier --write .
```

## 🌐 Integration with Upepo Ecosystem

Update the navigation links in `components/Navigation.tsx` to point to your actual Upepo platforms:
- Upepo Learn
- Upepo Voices
- Upepo Network
- Upepo Labs
- Upepo Foundation

## 📝 Content Management

### Option 1: Sanity CMS (Recommended)
1. Create account at [sanity.io](https://www.sanity.io)
2. Create new project
3. Add credentials to `.env`
4. Use Sanity Studio for content editing

### Option 2: Direct Database
- Use Prisma Studio to manage content
- Create custom admin dashboard

## 🤝 Contributing

This is a private repository for the Upepo Ecosystem. For contributions:
1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

© 2025 Upepo Insights. All rights reserved.

## 🆘 Support

For issues or questions:
- Email: insights@upepo.africa
- Documentation: [Link to docs]
- Community: [Link to community]

---

Built with 💜 for the African tech community by Liza Immax
