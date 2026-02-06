import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

import connectDB from '../lib/mongodb';
import Hostel from '../models/Hostel';

const hostels = [
  {
    name: 'Elite Boys Hostel',
    address: 'Near IIT Delhi Campus, Hauz Khas',
    city: 'Delhi',
    state: 'Delhi',
    type: 'Boys',
    pricePerMonth: 8000,
    roomTypes: ['Single', 'Double'],
    facilities: ['WiFi', 'AC', 'Meals', 'Laundry', 'Study Room', '24/7 Security'],
    description: 'Premium hostel with world-class amenities near IIT Delhi.',
    rating: 4.8,
    availableRooms: 5,
    totalRooms: 20,
    nearbyColleges: ['IIT Delhi', 'Delhi University'],
    contactPhone: '+91-9876543210',
    contactEmail: 'elite@hostel.com',
    verified: true,
  },
  {
    name: 'Home Away Hostels',
    address: 'Koramangala, Bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'Co-ed',
    pricePerMonth: 6500,
    roomTypes: ['Double', 'Triple'],
    facilities: ['WiFi', 'AC', 'Gym', 'Laundry', 'Common Kitchen'],
    description: 'Affordable co-ed hostel with modern amenities in the heart of Bangalore tech hub.',
    rating: 4.6,
    availableRooms: 8,
    totalRooms: 25,
    nearbyColleges: ['BITS', 'CMRIT'],
    contactPhone: '+91-8765432100',
    contactEmail: 'homeway@hostel.com',
    verified: true,
  },
  {
    name: 'Girls Paradise Hostel',
    address: 'Lokhandwala, Andheri West',
    city: 'Mumbai',
    state: 'Maharashtra',
    type: 'Girls',
    pricePerMonth: 7500,
    roomTypes: ['Single', 'Double', 'Triple'],
    facilities: ['WiFi', 'AC', 'Meals', 'Laundry', 'Yoga Room', 'Beauty Salon'],
    description: 'Safe and comfortable hostel exclusively for girls with premium facilities.',
    rating: 4.9,
    availableRooms: 3,
    totalRooms: 15,
    nearbyColleges: ['IIT Bombay', 'NMIMS'],
    contactPhone: '+91-7654321000',
    contactEmail: 'girlsparadise@hostel.com',
    verified: true,
  },
  {
    name: 'Tech Hub Hostel',
    address: 'Whitefield, Bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'Boys',
    pricePerMonth: 5500,
    roomTypes: ['Dormitory', 'Triple'],
    facilities: ['WiFi', 'Gaming Area', 'Study Lounge', 'Laundry'],
    description: 'Budget-friendly hostel perfect for tech enthusiasts and startup founders.',
    rating: 4.3,
    availableRooms: 12,
    totalRooms: 30,
    nearbyColleges: ['IIIT Bangalore'],
    contactPhone: '+91-6543210000',
    contactEmail: 'techhub@hostel.com',
    verified: true,
  },
  {
    name: 'Royal Guest House',
    address: 'Navrangpura, Ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    type: 'Co-ed',
    pricePerMonth: 4500,
    roomTypes: ['Triple', 'Dormitory'],
    facilities: ['WiFi', 'Meals', 'Library', 'Recreation Room'],
    description: 'Economical living solution with friendly community atmosphere.',
    rating: 4.2,
    availableRooms: 10,
    totalRooms: 22,
    nearbyColleges: ['NIT Surat', 'PDEU'],
    contactPhone: '+91-5432100000',
    contactEmail: 'royal@hostel.com',
    verified: false,
  },
];

async function seedHostels() {
  try {
    await connectDB();
    
    // Clear existing hostels
    await Hostel.deleteMany({});
    
    // Insert new hostels
    const result = await Hostel.insertMany(hostels);
    console.log(`✅ Successfully seeded ${result.length} hostels`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding hostels:', error);
    process.exit(1);
  }
}

seedHostels();
