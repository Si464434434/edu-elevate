import mongoose, { Schema, Document } from "mongoose";

export interface IMentor extends Document {
  name: string;
  specialization: string;
  experience: number;
  bio: string;
  profilePicture: string;
  email: string;
  verified: boolean;
  rating: number;
  availability: string;
  createdAt: Date;
  updatedAt: Date;
}

const MentorSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true }, // Years
    bio: String,
    profilePicture: String,
    email: { type: String, required: true },
    verified: { type: Boolean, default: false },
    rating: { type: Number, default: 5 },
    availability: String // Mon-Fri, 5-7 PM, etc.
  },
  { timestamps: true }
);

export default mongoose.models.Mentor ||
  mongoose.model<IMentor>("Mentor", MentorSchema);
