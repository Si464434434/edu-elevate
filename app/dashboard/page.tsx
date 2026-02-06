"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardHome() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [opportunities, setOpportunities] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile
        const profileRes = await fetch("/api/auth/profile");
        if (!profileRes.ok) {
          router.push("/auth/login");
          return;
        }
        const profileData = await profileRes.json();
        setUser(profileData.user);

        // Fetch opportunities
        const oppRes = await fetch("/api/opportunities");
        const oppData = await oppRes.json();
        setOpportunities(oppData.opportunities.slice(0, 5));

        // Fetch user applications
        const appRes = await fetch("/api/applications");
        const appData = await appRes.json();
        setApplications(appData.applications.slice(0, 5));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              E
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">EduElevate</span>
          </Link>
          <button
            onClick={() => {
              fetch("/api/auth/logout", { method: "POST" });
              router.push("/");
            }}
            className="px-6 py-2.5 text-gray-700 font-semibold hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300"
          >
            Logout 🚪
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <section className="mb-12 relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">{user?.name}!</span> 👋
            </h1>
            <p className="text-xl text-gray-600">Track opportunities, build your career, and achieve your dreams.</p>
          </div>
        </section>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                  📊
                </div>
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Active</span>
              </div>
              <p className="text-gray-600 font-semibold mb-2">Total Applications</p>
              <p className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">{applications.length}</p>
            </div>
          </div>
          <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-indigo-600 opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                  🎯
                </div>
                <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Live</span>
              </div>
              <p className="text-gray-600 font-semibold mb-2">Active Opportunities</p>
              <p className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">{opportunities.length}</p>
            </div>
          </div>
          <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                  ✨
                </div>
                <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">40%</span>
              </div>
              <p className="text-gray-600 font-semibold mb-2">Profile Completion</p>
              <div className="flex items-end gap-3">
                <p className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">40%</p>
              </div>
              <div className="mt-4 h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-2/5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10">🚀 Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Link href="/dashboard/opportunities" className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Explore Opportunities</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">Find internships, scholarships & more</p>
                <div className="flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Now <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
            <Link href="/dashboard/resume" className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">📄</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-3">Resume Builder</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">Create ATS-friendly resumes</p>
                <div className="flex items-center text-indigo-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Build Now <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
            <Link href="/dashboard/tracker" className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">✅</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-3">Application Tracker</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">Track all your applications</p>
                <div className="flex items-center text-purple-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Track Now <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
            <Link href="/dashboard/mentors" className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">👨‍🏫</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-3">Find Mentors</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">Get guidance from experts</p>
                <div className="flex items-center text-green-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Connect Now <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
            <Link href="/dashboard/hostels" className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-3">Find Hostels</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">Book hostels & find roommates</p>
                <div className="flex items-center text-orange-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore Now <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Recent Opportunities */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900">🔥 Recent Opportunities</h2>
            <Link href="/dashboard/opportunities" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300">
              View All →
            </Link>
          </div>
          <div className="space-y-6">
            {opportunities.map((opp: any) => (
              <div key={opp._id} className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-full shadow-md">
                        {opp.type?.toUpperCase() || "OPPORTUNITY"}
                      </span>
                      <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">✓ Verified</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">{opp.title}</h3>
                    <div className="flex items-center gap-6 text-gray-600">
                      <span className="flex items-center gap-2">📍 {opp.location}</span>
                      {opp.stipend && <span className="flex items-center gap-2">💰 {opp.stipend}</span>}
                      {opp.duration && <span className="flex items-center gap-2">⏰ {opp.duration}</span>}
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap">
                    Apply Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
