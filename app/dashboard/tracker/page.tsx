"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ApplicationTrackerPage() {
  const router = useRouter();
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("/api/applications");
        if (!res.ok) {
          router.push("/auth/login");
          return;
        }
        const data = await res.json();
        setApplications(data.applications || []);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [router]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "selected":
        return "bg-green-50 text-green-700 border-green-200";
      case "interview":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "rejected":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">✅ Application Tracker</h1>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading applications...</p>
          </div>
        ) : applications.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600 text-lg mb-4">No applications yet</p>
            <Link href="/dashboard/opportunities" className="text-blue-600 font-semibold hover:underline">
              Start applying to opportunities →
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app: any) => (
              <div key={app._id} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {app.opportunityId?.title || "Opportunity"}
                    </h2>
                    <p className="text-gray-600">
                      Applied on {new Date(app.appliedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-4 py-2 rounded-lg font-semibold border ${getStatusColor(app.status)}`}>
                    {app.status?.toUpperCase() || "PENDING"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
