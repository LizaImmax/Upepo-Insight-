# 🚀 Upepo Insights - Deployment Guide

Complete guide to deploying your Upepo Insights website to production.

## 📋 Pre-Deployment Checklist

### 1. Database Setup (MongoDB Atlas)

1. **Create MongoDB Atlas Account**
   - Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free tier (no credit card required)

2. **Create a Cluster**
   - Click "Build a Database"
   - Choose FREE tier (M0)
   - Select region closest to your users (e.g., Frankfurt for Africa/Europe)
   - Name your cluster (e.g., "upepo-insights-prod")

3. **Configure Database Access**
   - Go to "Database Access" in left sidebar
   - Click "Add New Database User"
   - Create username and strong password
   - Save credentials securely!

4. **Configure Network Access**
   - Go to "Network Access"
   - Click "Add IP Address"
   - For Vercel, add: `0.0.0.0/0` (allow from anywhere)
   - For production, you can restrict later

5. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Example: `mongodb+srv://upepoadmin:YourPassword@cluster0.xxxxx.mongodb.net/upepo-insights?retryWrites=true&w=majority`

### 2. Environment Variables Setup

Create these variables in Vercel dashboard:

```env
# Database
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/upepo-insights

# NextAuth
NEXTAUTH_URL=https://insights.upepo.africa
NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32

# Optional: Email notifications
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-password
EMAIL_FROM=noreply@upepo.africa

# Optional: Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### 3. Generate Secrets

**NEXTAUTH_SECRET** (required):
```bash
# On Windows PowerShell
$bytes = New-Object byte[] 32
[System.Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes)
[Convert]::ToBase64String($bytes)

# OR use online generator
# https://generate-secret.vercel.app/32
```

## 🌐 Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
```bash
cd c:\Users\LIZZA\Documents\Upepo-Insight-
git add .
git commit -m "Initial commit - Upepo Insights website"
git push origin main
```

2. **Connect to Vercel**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import "Upepo-Insight-" repository

3. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `prisma generate && next build`
   - Output Directory: `.next` (default)

4. **Add Environment Variables**
   - In Vercel project settings → Environment Variables
   - Add all variables from section 2 above
   - Make sure to select "Production", "Preview", and "Development"

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - Your site will be live at `https://upepo-insight-xyz.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
cd c:\Users\LIZZA\Documents\Upepo-Insight-
vercel --prod
```

## 🔧 Post-Deployment Setup

### 1. Custom Domain (Optional)

1. **In Vercel Dashboard**
   - Go to Project Settings → Domains
   - Add your domain (e.g., `insights.upepo.africa`)

2. **DNS Configuration**
   - Add CNAME record: `insights` → `cname.vercel-dns.com`
   - OR A record: `@` → `76.76.21.21`
   - Wait 5-10 minutes for propagation

3. **Update NEXTAUTH_URL**
   - Change to your custom domain in environment variables

### 2. Initialize Database

1. **Run Prisma Migrations** (one-time)
```bash
# The build process runs this automatically
# But if you need to manually run:
npx prisma db push
```

2. **Add Sample Data**
   - Option 1: Use Prisma Studio locally, then deploy
   - Option 2: Create admin panel (future feature)
   - Option 3: Direct MongoDB Atlas access

### 3. Test Your Deployment

Visit these pages to verify:
- ✅ Homepage: `https://your-domain.com`
- ✅ Reports: `https://your-domain.com/reports`
- ✅ Metrics: `https://your-domain.com/metrics`
- ✅ Subscribe: `https://your-domain.com/subscribe`

## 📊 Monitoring & Analytics

### 1. Vercel Analytics (Built-in)
- Automatically enabled
- View in Vercel dashboard → Analytics tab

### 2. Google Analytics (Optional)

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (e.g., `G-XXXXXXXXXX`)
3. Add to `.env`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. Error Tracking (Optional)

Consider adding:
- [Sentry](https://sentry.io) - Error tracking
- [LogRocket](https://logrocket.com) - Session replay
- [Vercel Logs](https://vercel.com/docs/observability/runtime-logs) - Built-in logging

## 🔄 Continuous Deployment

Every push to `main` branch automatically deploys to production!

```bash
# Make changes
git add .
git commit -m "Update homepage design"
git push origin main

# Vercel automatically builds and deploys
# Check deployment status at vercel.com
```

## 🎨 Optional Enhancements

### 1. Email Service Setup (Mailgun/SendGrid)

For newsletter and download emails:

1. **Sign up for Email Service**
   - [SendGrid](https://sendgrid.com) - 100 emails/day free
   - [Mailgun](https://www.mailgun.com) - 5,000 emails/month free

2. **Get API Keys**
3. **Add to environment variables**
4. **Implement in `/app/api/subscribe/route.ts`**

### 2. File Storage (AWS S3)

For hosting PDF reports:

1. Create AWS account
2. Create S3 bucket: `upepo-insights-reports`
3. Get Access Keys
4. Add to environment variables
5. Implement upload functionality

### 3. Sanity CMS Setup

For easy content management:

1. **Create Sanity Project**
```bash
npm install -g @sanity/cli
sanity init
```

2. **Configure Schemas** (for reports, articles)
3. **Deploy Sanity Studio**
```bash
sanity deploy
```

4. **Add credentials to Vercel environment variables**

## 🐛 Troubleshooting

### Build Fails

**Error**: `Prisma Client not found`
**Solution**: Build command must include `prisma generate`
```bash
prisma generate && next build
```

**Error**: `DATABASE_URL is not defined`
**Solution**: Add environment variable in Vercel dashboard

### Database Connection Issues

**Error**: `MongoServerError: bad auth`
**Solution**: Check username/password in connection string

**Error**: `Connection timeout`
**Solution**: Whitelist `0.0.0.0/0` in MongoDB Atlas Network Access

### Performance Issues

- Enable Vercel Edge Functions for faster responses
- Use Vercel Image Optimization for images
- Enable caching headers for static content

## 📈 Scaling Considerations

As your platform grows:

1. **Database**: Upgrade MongoDB Atlas tier
2. **CDN**: Vercel handles this automatically
3. **API Rate Limiting**: Implement rate limiting middleware
4. **Caching**: Add Redis for frequently accessed data
5. **Search**: Integrate Algolia or ElasticSearch

## 🔒 Security Checklist

- ✅ HTTPS enabled (automatic with Vercel)
- ✅ Environment variables secured
- ✅ Database credentials strong
- ✅ CORS configured properly
- ✅ Input validation on all forms
- ✅ Rate limiting on API routes (to implement)

## 📞 Support

If you encounter issues:

1. Check Vercel deployment logs
2. Review MongoDB Atlas logs
3. Test locally first with `npm run dev`
4. Contact: insights@upepo.africa

## 🎉 You're Live!

Congratulations! Your Upepo Insights platform is now live and ready to make Africa a leader in cloud and cybersecurity intelligence.

**Next Steps:**
1. Add real content/reports
2. Promote to Upepo community
3. Monitor analytics
4. Iterate based on feedback

---

Built with 💜 for the African tech community
