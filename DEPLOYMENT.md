# 🚀 EduElevate Deployment & Setup Guide

## 📋 Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (free tier available)
- Vercel account (for deployment)
- Git installed

## 🛠️ Local Setup

### 1. Install Dependencies
```bash
cd saht
npm install
```

### 2. MongoDB Setup
- Create a free MongoDB Atlas cluster: https://www.mongodb.com/cloud/atlas
- Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority`

### 3. Environment Variables
Create `.env.local` in the project root:
```env
MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/edu-elevate?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here_change_this
NEXTAUTH_SECRET=your_nextauth_secret_here_change_this
NEXTAUTH_URL=http://localhost:3000
```

### 4. Generate Secrets (Optional but Recommended)
```bash
openssl rand -base64 32  # For JWT_SECRET
openssl rand -base64 32  # For NEXTAUTH_SECRET
```

### 5. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

## ✨ Features Included

✅ **Landing Page** - Conversion-focused hero, features, testimonials  
✅ **Authentication** - Register, Login, Logout with JWT  
✅ **Dashboard** - Home with quick stats and feature access  
✅ **Opportunity Explorer** - Search, filter, apply to opportunities  
✅ **Resume Builder** - Create and save professional resume  
✅ **Application Tracker** - Track all applications with status  
✅ **Mentor Connect** - Browse and request guidance from mentors  
✅ **Backend APIs** - Complete RESTful API for all features  
✅ **Database** - MongoDB with Mongoose models  
✅ **Responsive Design** - Mobile-first, works on all devices  

## 📁 Project Structure

```
saht/
├── app/
│   ├── api/                 # API routes
│   │   ├── auth/           # Authentication (register, login, profile)
│   │   ├── opportunities/   # Opportunity CRUD
│   │   ├── applications/    # Application tracking
│   │   ├── mentor/         # Mentor listing
│   │   └── resume/         # Resume management
│   ├── auth/               # Auth pages (register, login)
│   ├── dashboard/          # Protected dashboard pages
│   │   ├── opportunities/  # Opportunity explorer
│   │   ├── resume/        # Resume builder
│   │   ├── tracker/       # Application tracker
│   │   └── mentors/       # Mentor connect
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── lib/
│   └── mongodb.ts         # MongoDB connection
├── models/                # Mongoose schemas
│   ├── User.ts
│   ├── Opportunity.ts
│   ├── Application.ts
│   ├── Resume.ts
│   └── Mentor.ts
├── public/                # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── .env.local            # Environment variables
```

## 🌐 Deployment Guide (Vercel)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: EduElevate MVP"
git remote add origin https://github.com/your-username/edu-elevate.git
git push -u origin main
```

### 2. Connect to Vercel
- Go to https://vercel.com
- Click "New Project"
- Import your GitHub repository
- Configure environment variables in Vercel dashboard:
  - `MONGODB_URI` → Your MongoDB connection string
  - `JWT_SECRET` → Your JWT secret
  - `NEXTAUTH_SECRET` → Your NextAuth secret
  - `NEXTAUTH_URL` → Your deployed domain (e.g., https://edu-elevate.vercel.app)

### 3. Deploy
- Vercel will automatically build and deploy on push to main
- Live URL: `https://YOUR_PROJECT.vercel.app`

## 🗄️ Seed Sample Data (Optional)

Add sample opportunities to MongoDB:

```bash
# Connect to MongoDB Atlas via MongoDB Compass
# Import sample data document:
{
  "title": "Google Summer Internship",
  "description": "3-month paid internship at Google offices",
  "type": "internship",
  "company": "Google",
  "stipend": "₹1,50,000/month",
  "duration": "3 months",
  "location": "Bangalore, India",
  "stream": ["CSE", "ECE"],
  "deadline": "2026-03-15",
  "link": "https://google.com/careers",
  "verified": true
}
```

## 🔐 Security Checklist

- [ ] Change default JWT_SECRET
- [ ] Change default NEXTAUTH_SECRET
- [ ] Use HTTPS only in production
- [ ] Set secure cookies (`httpOnly: true`)
- [ ] Validate all user inputs
- [ ] Rate limit API endpoints
- [ ] Enable MongoDB IP whitelist
- [ ] Use environment variables for secrets

## 📱 Testing the App

1. **Register**: Create a new student account
2. **explore**: Browse opportunities with filters
3. **Apply**: Apply to opportunities
4. **Resume**: Build and save your resume
5. **Track**: Monitor application status
6. **Mentors**: Browse available mentors

## 🐛 Troubleshooting

**MongoDB Connection Error?**
- Check connection string in `.env.local`
- Verify IP whitelist in MongoDB Atlas
- Ensure database name matches

**Login not working?**
- Clear browser cookies
- Check JWT_SECRET matches across environment
- Verify token expiration

**API 404 errors?**
- Ensure API route files are in correct `/api/` folder
- Check file naming: `route.ts` (not `route.js`)

## 🚀 Next Steps for Production

1. **Add more opportunities** - Seed database with real data
2. **Email notifications** - Send application confirmations
3. **Payment integration** - If charging for features
4. **Admin panel** - Manage opportunities and mentors
5. **Analytics** - Track user engagement
6. **AI Resume Scorer** - Auto-improve resume with AI

## 📊 Demo Credentials

After registration, you can demo with:
- **Email**: demo@edu-elevate.com
- **Password**: Demo123456

## 📞 Support

For issues or questions, create a GitHub issue or email support@edu-elevate.com

---

**Built with ❤️ using Next.js, MongoDB, and Tailwind CSS**
