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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              E
            </div>
            <span className="text-xl font-bold text-gray-900">EduElevate</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">
              Features
            </a>
            <a href="#opportunities" className="text-gray-700 hover:text-blue-600 font-medium">
              Opportunities
            </a>
            <a href="#mentors" className="text-gray-700 hover:text-blue-600 font-medium">
              Mentors
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-gray-700 font-semibold hover:text-blue-600">
              Login
            </Link>
            <Link href="/auth/register" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Student Potential</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Find 100% verified internships, scholarships, and opportunities curated for Indian students.
            Build resumes, track applications, and get mentored — all in one place.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-2 bg-white rounded-lg shadow-xl p-2">
              <input
                type="text"
                placeholder="Search opportunities, skills, companies..."
                className="flex-1 px-4 py-3 outline-none text-gray-900 placeholder:text-gray-500"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-4xl font-bold text-blue-600">{stats.students.toLocaleString()}+</p>
              <p className="text-gray-600 mt-2">Active Students</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-4xl font-bold text-indigo-600">{stats.opportunities.toLocaleString()}+</p>
              <p className="text-gray-600 mt-2">Opportunities</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-4xl font-bold text-purple-600">{stats.mentors}+</p>
              <p className="text-gray-600 mt-2">Expert Mentors</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/auth/register" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold hover:shadow-xl transition">
              Explore Opportunities
            </Link>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose EduElevate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section id="opportunities" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            Featured Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Google Summer Internship", company: "Google", type: "Internship", deadline: "15 Mar" },
              { title: "AI/ML Hackathon", company: "HackerEarth", type: "Hackathon", deadline: "20 Mar" },
              { title: "Microsoft Scholarship", company: "Microsoft", type: "Scholarship", deadline: "25 Mar" }
            ].map((opp, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {opp.type}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">{opp.title}</h3>
                <p className="text-gray-600 mb-4">{opp.company}</p>
                <p className="text-sm text-gray-500">Deadline: {opp.deadline}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/auth/register" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold hover:shadow-lg transition">
              View All Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md">
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section id="mentors" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Learn from Industry Experts
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Connect with verified mentors from top tech companies. Get personalized guidance for your career.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold hover:shadow-lg transition">
            Explore Mentors
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">EduElevate</h3>
              <p className="text-gray-400">Unlocking student potential, one opportunity at a time.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">Opportunities</a></li>
                <li><a href="#" className="hover:text-white">Resume Builder</a></li>
                <li><a href="#" className="hover:text-white">Mentors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Social</h4>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 EduElevate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
