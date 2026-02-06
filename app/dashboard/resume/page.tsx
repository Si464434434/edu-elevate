"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResumeBuilderPage() {
  const router = useRouter();
  const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    experience: [{ company: "", position: "", duration: "", description: "" }],
    education: [{ school: "", degree: "", field: "", year: "" }],
    skills: []
  });

  const [saving, setSaving] = useState(false);

  const handleSaveResume = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resumeData)
      });

      if (res.ok) {
        alert("Resume saved successfully!");
      }
    } catch (error) {
      console.error("Error saving resume:", error);
    } finally {
      setSaving(false);
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

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">📄 Resume Builder</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={resumeData.fullName}
                onChange={(e) => setResumeData({ ...resumeData, fullName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={resumeData.email}
                  onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="Your phone"
                  value={resumeData.phone}
                  onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
              <input
                type="text"
                placeholder="City, Country"
                value={resumeData.location}
                onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Professional Summary</label>
              <textarea
                placeholder="Brief summary about yourself..."
                value={resumeData.summary}
                onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-24"
              />
            </div>

            <button
              onClick={handleSaveResume}
              disabled={saving}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Resume"}
            </button>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-lg shadow-lg p-8 h-fit">
            <h2 className="text-2xl font-bold text-gray-900">{resumeData.fullName || "Your Name"}</h2>
            <p className="text-gray-600">{resumeData.location}</p>
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-gray-700">{resumeData.email}</p>
              <p className="text-sm text-gray-700">{resumeData.phone}</p>
            </div>
            {resumeData.summary && (
              <div className="mt-4 pt-4 border-t">
                <h3 className="font-bold text-gray-900">Summary</h3>
                <p className="text-sm text-gray-700 mt-2">{resumeData.summary}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
