"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MentorsPage() {
  const router = useRouter();
  const [mentors, setMentors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await fetch("/api/mentor");
        const data = await res.json();
        setMentors(data.mentors || []);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              E
            </div>
            <span className="text-xl font-bold text-gray-900">EduElevate</span>
          </Link>
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">👨‍🏫 Expert Mentors</h1>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading mentors...</p>
          </div>
        ) : mentors.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600 text-lg">No mentors available yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor: any) => (
              <div key={mentor._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{mentor.name}</h2>
                    <p className="text-sm text-gray-600">{mentor.specialization}</p>
                  </div>
                  <span className="text-2xl">⭐ {mentor.rating}</span>
                </div>
                <p className="text-sm text-gray-700 mb-4">{mentor.bio}</p>
                <div className="mb-4">
                  <p className="text-xs text-gray-600">
                    💼 {mentor.experience} years experience
                  </p>
                  <p className="text-xs text-gray-600">📅 {mentor.availability}</p>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                  Request Guidance
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
