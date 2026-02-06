"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OpportunitiesPage() {
  const router = useRouter();
  const [opportunities, setOpportunities] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    type: "",
    search: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const query = new URLSearchParams();
        if (filters.type) query.append("type", filters.type);
        if (filters.search) query.append("search", filters.search);

        const res = await fetch(`/api/opportunities?${query}`);
        const data = await res.json();
        setOpportunities(data.opportunities || []);
      } catch (error) {
        console.error("Error fetching opportunities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, [filters]);

  const handleApply = async (opportunityId: string) => {
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ opportunityId })
      });

      if (res.ok) {
        alert("Applied successfully!");
      }
    } catch (error) {
      console.error("Error applying:", error);
    }
  };

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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">🔍 Explore Opportunities</h1>

        {/* Filters */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Search opportunities..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">All Types</option>
              <option value="internship">Internship</option>
              <option value="scholarship">Scholarship</option>
              <option value="hackathon">Hackathon</option>
              <option value="competition">Competition</option>
              <option value="event">Event</option>
            </select>
          </div>
        </div>

        {/* Opportunities List */}
        <div className="space-y-4">
          {opportunities.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No opportunities found</p>
            </div>
          ) : (
            opportunities.map((opp: any) => (
              <div key={opp._id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2">
                      {opp.type?.toUpperCase()}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{opp.title}</h2>
                    <p className="text-gray-600">📍 {opp.location}</p>
                    {opp.company && <p className="text-gray-600">🏢 {opp.company}</p>}
                    {opp.stipend && <p className="text-green-600 font-semibold">💰 {opp.stipend}</p>}
                    <p className="text-sm text-gray-500 mt-2">⏰ Deadline: {new Date(opp.deadline).toLocaleDateString()}</p>
                  </div>
                  <button
                    onClick={() => handleApply(opp._id)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold hover:shadow-lg transition"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
