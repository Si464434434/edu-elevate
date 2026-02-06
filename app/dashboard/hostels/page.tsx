'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Hostel {
  _id: string;
  name: string;
  address: string;
  city: string;
  pricePerMonth: number;
  type: string;
  rating: number;
  reviews: any[];
  availableRooms: number;
  totalRooms: number;
  facilities: string[];
  verified: boolean;
}

export default function HostelFinder() {
  const [hostels, setHostels] = useState<Hostel[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({ city: '', type: '', maxPrice: '' });
  const [selectedHostel, setSelectedHostel] = useState<Hostel | null>(null);

  const fetchHostels = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filter.city) params.append('city', filter.city);
      if (filter.type) params.append('type', filter.type);
      if (filter.maxPrice) params.append('maxPrice', filter.maxPrice);

      const res = await fetch(`/api/hostels?${params}`);
      const data = await res.json();
      setHostels(data);
    } catch (error) {
      console.error('Failed to fetch hostels:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHostels();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-4">
            🏠 Hostel Finder
          </h1>
          <p className="text-xl text-gray-600">Find your perfect hostel near your college</p>
        </div>

        {/* Search & Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 bg-white rounded-2xl p-6 shadow-lg">
          <input
            type="text"
            placeholder="Search city..."
            value={filter.city}
            onChange={(e) => setFilter({ ...filter, city: e.target.value })}
            className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-100 outline-none transition"
          />
          
          <select
            value={filter.type}
            onChange={(e) => setFilter({ ...filter, type: e.target.value })}
            className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-100 outline-none transition"
          >
            <option value="">All Types</option>
            <option value="Boys">Boys</option>
            <option value="Girls">Girls</option>
            <option value="Co-ed">Co-ed</option>
          </select>

          <input
            type="number"
            placeholder="Max price (₹/month)..."
            value={filter.maxPrice}
            onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })}
            className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-100 outline-none transition"
          />

          <button
            onClick={fetchHostels}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition"
          >
            🔍 Search
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hostels List */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading hostels...</p>
              </div>
            ) : hostels.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl">
                <p className="text-gray-600 text-lg">😟 No hostels found. Try different filters!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {hostels.map((hostel) => (
                  <button
                    key={hostel._id}
                    onClick={() => setSelectedHostel(hostel)}
                    className={`w-full text-left p-6 rounded-xl transition-all ${
                      selectedHostel?._id === hostel._id
                        ? 'bg-gradient-to-r from-blue-100 to-indigo-100 shadow-lg border-2 border-blue-400'
                        : 'bg-white shadow-md hover:shadow-lg border border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                          {hostel.verified && '✅'} {hostel.name}
                        </h3>
                        <p className="text-gray-600">{hostel.address}, {hostel.city}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                          ₹{hostel.pricePerMonth}
                        </p>
                        <p className="text-sm text-gray-600">/month</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {hostel.type}
                      </span>
                      <span className="flex items-center gap-1">
                        {'⭐'.repeat(Math.round(hostel.rating))}
                        <span className="text-sm text-gray-600">({hostel.reviews?.length || 0})</span>
                      </span>
                    </div>

                    <p className="text-sm text-gray-700 mb-2">
                      {hostel.availableRooms}/{hostel.totalRooms} rooms available
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {hostel.facilities.slice(0, 3).map((facility, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hostel Details */}
          <div className="lg:col-span-1">
            {selectedHostel ? (
              <div className="bg-white rounded-2xl p-6 shadow-xl sticky top-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedHostel.name}</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-semibold text-gray-900">{selectedHostel.address}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                      ₹{selectedHostel.pricePerMonth}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="font-semibold">{selectedHostel.type}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Rating</p>
                    <div className="flex items-center gap-2">
                      <div>{'⭐'.repeat(Math.round(selectedHostel.rating))}</div>
                      <span className="text-sm text-gray-600">({selectedHostel.reviews?.length || 0} reviews)</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Available Rooms</p>
                    <p className="font-semibold">
                      {selectedHostel.availableRooms > 0 ? (
                        <span className="text-green-600">{selectedHostel.availableRooms} Available</span>
                      ) : (
                        <span className="text-red-600">Fully Booked</span>
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Facilities</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedHostel.facilities.map((facility, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition mb-2">
                  📞 Contact Now
                </button>

                <button className="w-full px-6 py-3 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition">
                  ❤️ Save Hostel
                </button>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 text-center">
                <p className="text-gray-700 font-semibold">👈 Select a hostel to view details</p>
              </div>
            )}
          </div>
        </div>

        {/* Room Finder Section */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🤝 Find Roommates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
                <p className="text-6xl mb-3">👥</p>
                <h3 className="font-bold text-lg mb-2">Connect with Roommates</h3>
                <p className="text-gray-600 text-sm">Find compatible roommates in your hostel</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
                <p className="text-6xl mb-3">💬</p>
                <h3 className="font-bold text-lg mb-2">Direct Messaging</h3>
                <p className="text-gray-600 text-sm">Chat directly with potential roommates</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
                <p className="text-6xl mb-3">⭐</p>
                <h3 className="font-bold text-lg mb-2">Ratings & Reviews</h3>
                <p className="text-gray-600 text-sm">Read reviews from current residents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
