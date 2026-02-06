"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [stats, setStats] = useState({
    students: 45000,
    opportunities: 5200,
    mentors: 380
  });

  const testimonials = [
    {
      text: "Got my dream internship at Google thanks to EduElevate!",
      author: "Aditya, Mumbai"
    },
    {
      text: "Resume builder helped me land 3 interview calls.",
      author: "Priya, Bangalore"
    },
    {
      text: "Mentor guidance was game-changing for my profile.",
      author: "Rohit, Delhi"
    }
  ];

  const features = [
    {
      icon: "🔍",
      title: "100% Verified Opportunities",
      desc: "No spam. Real internships, scholarships & hackathons."
    },
    {
      icon: "📄",
      title: "Smart Resume Builder",
      desc: "Build ATS-friendly resumes in minutes."
    },
    {
      icon: "👨‍🏫",
      title: "Expert Mentors",
      desc: "Get guidance from industry professionals."
    },
    {
      icon: "✅",
      title: "Application Tracker",
      desc: "Track all your applications in one place."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              E
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">EduElevate</span>
          </div>
          MONGODB_URI
          mongodb+srv://sarthakkhareo88_db_user:CFLBQPa8WFfGqqgf@cluster0.zugm5ms.mongodb.net/edu-elevate?retryWrites=true&w=majority&appName=Cluster0
          
          JWT_SECRET
          jwt-super-secret-key-67890
          
          NEXTAUTH_SECRET
          edu-elevate-secret-2026-12345          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#opportunities" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
              Opportunities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#mentors" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
              Mentors
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-gray-700 font-semibold hover:text-blue-600 transition-colors">
              Login
            </Link>
            <Link href="/auth/register" className="px-6 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Sign Up Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-24 px-6 relative">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm animate-bounce">
            🎉 Join 45,000+ Students Already Growing!
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            Unlock Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient">
              Dream Career
            </span>
            <br />
            <span className="text-5xl md:text-6xl">Start Today!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover <strong>100% verified</strong> internships, scholarships & competitions. 
            Build resumes, track applications, connect with mentors — <span className="text-blue-600 font-semibold">all for FREE!</span>
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="flex gap-3 bg-white rounded-2xl shadow-2xl p-3 border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
              <input
                type="text"
                placeholder="🔍 Search internships, hackathons, scholarships..."
                className="flex-1 px-6 py-4 outline-none text-gray-900 placeholder:text-gray-400 text-lg"
              />
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Search Now
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
                {stats.students.toLocaleString()}+
              </div>
              <p className="text-gray-600 font-semibold text-lg">Active Students</p>
              <div className="mt-4 h-2 bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent mb-2">
                {stats.opportunities.toLocaleString()}+
              </div>
              <p className="text-gray-600 font-semibold text-lg">Live Opportunities</p>
              <div className="mt-4 h-2 bg-indigo-100 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">
                {stats.mentors}+
              </div>
              <p className="text-gray-600 font-semibold text-lg">Expert Mentors</p>
              <div className="mt-4 h-2 bg-purple-100 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/auth/register" className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                🚀 Explore Opportunities
              </span>
            </Link>
            <button className="px-10 py-5 border-2 border-indigo-600 text-indigo-600 rounded-2xl font-bold text-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:shadow-xl transition-all duration-300">
              ▶️ Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">EduElevate</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in one powerful platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group relative p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                  <div className="mt-4 w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section id="opportunities" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                🔥 Trending Opportunities
              </h2>
              <p className="text-xl text-gray-600">Handpicked opportunities updated daily</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Google Summer Internship", company: "Google", type: "Internship", deadline: "15 Mar", stipend: "₹1.5L/mo", color: "from-red-500 to-orange-500" },
              { title: "AI/ML Hackathon 2026", company: "HackerEarth", type: "Hackathon", deadline: "20 Mar", stipend: "₹1L Prize", color: "from-green-500 to-emerald-500" },
              { title: "Microsoft Azure Scholarship", company: "Microsoft", type: "Scholarship", deadline: "25 Mar", stipend: "$500", color: "from-blue-500 to-cyan-500" }
            ].map((opp, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${opp.color} opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`}></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-full shadow-md">
                      {opp.type}
                    </span>
                    <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">✓ Verified</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{opp.title}</h3>
                  <p className="text-gray-600 mb-4 font-semibold">{opp.company}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">💰 {opp.stipend}</span>
                    <span className="text-red-500 font-semibold">⏰ {opp.deadline}</span>
                  </div>
                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                    Apply Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/auth/register" className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              🎯 View All 5,200+ Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              ⭐ Success Stories
            </h2>
            <p className="text-xl text-gray-600">Join thousands of students who achieved their dreams</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  &quot;
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section id="mentors" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
                👨‍🏫 Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Industry Experts</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with verified mentors from <strong>Google, Microsoft, Amazon</strong> and other top companies. Get personalized 1-on-1 guidance, portfolio reviews, and career advice.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold">✓</div>
                  <span className="text-lg text-gray-700">1-on-1 Mentorship Sessions</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold">✓</div>
                  <span className="text-lg text-gray-700">Resume & Portfolio Reviews</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold">✓</div>
                  <span className="text-lg text-gray-700">Mock Interviews & Prep</span>
                </div>
              </div>
              <Link href="/auth/register" className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                🚀 Connect with Mentors
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "Priya S.", role: "Ex-Google SDE", rating: "4.9", sessions: "120+" },
                { name: "Rahul V.", role: "Amazon ML", rating: "4.8", sessions: "95+" },
                { name: "Anjali M.", role: "Flipkart UX", rating: "4.9", sessions: "87+" },
                { name: "Vikram S.", role: "Microsoft", rating: "5.0", sessions: "150+" }
              ].map((mentor, idx) => (
                <div key={idx} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mb-4"></div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{mentor.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{mentor.role}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-yellow-500 font-semibold">⭐ {mentor.rating}</span>
                    <span className="text-gray-500">{mentor.sessions} sessions</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  E
                </div>
                <span className="text-2xl font-bold">EduElevate</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">Unlocking student potential, one opportunity at a time. Join 45,000+ students growing their careers.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <span className="text-xl">👤</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all duration-300">
                  <span className="text-xl">📸</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Product</h4>
              <ul className="text-gray-400 space-y-3">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">→ Opportunities</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">→ Resume Builder</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">→ Mentors</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">→ Application Tracker</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="text-gray-400 space-y-3">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">→ About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">→ Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">→ Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">→ Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Resources</h4>
              <ul className="text-gray-400 space-y-3">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">→ Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">→ Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">→ Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">→ Student Guide</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400">© 2026 EduElevate. All rights reserved. Made with ❤️ for Indian Students.</p>
              <div className="flex gap-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
