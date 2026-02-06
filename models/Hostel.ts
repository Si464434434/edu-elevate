import mongoose from 'mongoose';

const hostelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  type: { type: String, enum: ['Boys', 'Girls', 'Co-ed'], required: true },
  pricePerMonth: { type: Number, required: true },
  roomTypes: [{
    type: String,
    enum: ['Single', 'Double', 'Triple', 'Dormitory']
  }],
  facilities: [String], // WiFi, AC, Food, Laundry, etc.
  description: String,
  images: [String],
  rating: { type: Number, default: 0, min: 0, max: 5 },
  reviews: [{ 
    userId: mongoose.Schema.Types.ObjectId,
    userName: String,
    text: String,
    rating: Number,
    date: { type: Date, default: Date.now }
  }],
  availableRooms: { type: Number, default: 0 },
  totalRooms: { type: Number, required: true },
  nearbyColleges: [String],
  contactPhone: String,
  contactEmail: String,
  owner: mongoose.Schema.Types.ObjectId,
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Hostel || mongoose.model('Hostel', hostelSchema);
