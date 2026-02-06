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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              E
            </div>
            <span className="text-xl font-bold text-gray-900">EduElevate</span>
          </div>
          <button
            onClick={() => {
              fetch("/api/auth/logout", { method: "POST" });
              router.push("/");
            }}
            className="text-gray-700 font-semibold hover:text-red-600"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-gray-600">Track opportunities and grow your career.</p>
        </section>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-600 text-sm">Total Applications</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">{applications.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-600 text-sm">Active Opportunities</p>
            <p className="text-3xl font-bold text-indigo-600 mt-2">{opportunities.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-600 text-sm">Profile Completion</p>
            <p className="text-3xl font-bold text-purple-600 mt-2">40%</p>
          </div>
        </div>

        {/* Main Features Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/dashboard/opportunities" className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Explore Opportunities</h3>
              <p className="text-sm text-gray-600 mt-2">Find internships, scholarships & more</p>
            </Link>
            <Link href="/dashboard/resume" className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Resume Builder</h3>
              <p className="text-sm text-gray-600 mt-2">Create ATS-friendly resumes</p>
            </Link>
            <Link href="/dashboard/tracker" className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Application Tracker</h3>
              <p className="text-sm text-gray-600 mt-2">Track all your applications</p>
            </Link>
            <Link href="/dashboard/mentors" className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Find Mentors</h3>
              <p className="text-sm text-gray-600 mt-2">Get guidance from experts</p>
            </Link>
          </div>
        </section>

        {/* Recent Opportunities */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Opportunities</h2>
            <Link href="/dashboard/opportunities" className="text-blue-600 font-semibold hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {opportunities.map((opp: any) => (
              <div key={opp._id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2">
                      {opp.type?.toUpperCase() || "OPPORTUNITY"}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">{opp.title}</h3>
                    <p className="text-gray-600 mt-1">📍 {opp.location}</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                    Apply
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
