# ⚡ Quick Start Guide - Upepo Insights

Get your Upepo Insights website running in 5 minutes!

## 🎯 What You Need

- Node.js 18+ installed
- A code editor (VS Code recommended)
- MongoDB Atlas account (free tier)

## 🚀 5-Minute Setup

### Step 1: Install Dependencies (1 min)

```bash
cd c:\Users\LIZZA\Documents\Upepo-Insight-
npm install
```

### Step 2: Setup Database (2 min)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create FREE cluster
3. Create database user (save password!)
4. Whitelist all IPs: `0.0.0.0/0`
5. Copy connection string

### Step 3: Configure Environment (1 min)

Create `.env` file:

```env
DATABASE_URL="your-mongodb-connection-string-here"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="any-random-string-32-chars-long"
```

### Step 4: Initialize Database (30 sec)

```bash
npx prisma generate
npx prisma db push
```

### Step 5: Start Development Server (30 sec)

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

## ✅ You're Done!

Your website is now running locally with:
- ✨ Beautiful royal/gold/cyber design
- 📊 Interactive metrics dashboard
- 📄 Gated content downloads
- 📧 Newsletter subscription
- 🗄️ MongoDB database

## 🎨 What's Included

### Pages Created:
- **Homepage** (`/`) - Hero, features, stats, latest reports
- **Reports** (`/reports`) - Searchable, filterable report library
- **Metrics Dashboard** (`/metrics`) - Live charts and data visualization
- **Subscribe** (`/subscribe`) - Newsletter signup page

### Components:
- Navigation with dropdown menus
- Footer with ecosystem links
- Responsive design (mobile/tablet/desktop)
- Animated interactions with Framer Motion

### Backend:
- API route for subscriptions (`/api/subscribe`)
- API route for downloads (`/api/download`)
- Prisma ORM with MongoDB
- Database models for Users, Reports, Subscriptions, etc.

## 🎯 Next Steps

### 1. Add Content

Open Prisma Studio to add reports:
```bash
npm run prisma:studio
```

Navigate to `Report` table and add your first report!

### 2. Customize Links

Edit `components/Navigation.tsx` to link to your actual Upepo platforms:
- Upepo Learn
- Upepo Voices  
- Upepo Network
- Upepo Labs

### 3. Customize Branding

All colors are in `tailwind.config.ts`:
- `royal` - Purple shades
- `gold` - Gold/amber shades
- `cyber` - Teal/cyan shades
- `navy` - Navy blue shades

### 4. Add Real Data

The metrics dashboard currently shows sample data. Update in:
- `app/metrics/page.tsx`

Connect to real data sources or manually update values.

## 📦 Project Structure

```
Upepo-Insight-/
├── app/
│   ├── api/              # Backend API routes
│   ├── reports/          # Reports page
│   ├── metrics/          # Dashboard
│   ├── subscribe/        # Newsletter page
│   └── page.tsx          # Homepage
├── components/
│   ├── Navigation.tsx    # Top nav
│   └── Footer.tsx        # Footer
├── lib/
│   └── prisma.ts         # Database client
├── prisma/
│   └── schema.prisma     # Database schema
└── public/               # Static files
```

## 🚀 Deploy to Production

When ready to go live:

```bash
# Push to GitHub
git add .
git commit -m "Launch Upepo Insights"
git push origin main

# Deploy to Vercel
vercel --prod
```

See `DEPLOYMENT.md` for detailed deployment guide.

## 🔧 Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Run production build
npm run lint         # Check code quality
npx prisma studio    # Open database GUI
npx prisma generate  # Regenerate Prisma client
```

## 💡 Tips

1. **Testing Email**: Use [Mailtrap](https://mailtrap.io) for testing emails locally
2. **Sample Data**: Add 3-5 reports to make the site look populated
3. **Images**: Add report cover images to `public/reports/`
4. **Performance**: Next.js automatically optimizes images
5. **SEO**: Update metadata in each `page.tsx` file

## 🐛 Troubleshooting

**Server won't start?**
- Make sure MongoDB connection string is correct in `.env`
- Run `npm install` again

**Database errors?**
- Run `npx prisma generate` and `npx prisma db push`

**Styling issues?**
- Clear `.next` folder and restart: `Remove-Item -Recurse .next; npm run dev`

**Need help?**
- Check `README.md` for detailed documentation
- Review `DEPLOYMENT.md` for production setup

## 🎉 Enjoy!

You now have a world-class research platform ready to establish Upepo as Africa's leading cloud and cybersecurity intelligence authority!

**Questions?** insights@upepo.africa

---

Built with 💜 by Liza Immax
