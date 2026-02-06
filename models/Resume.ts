import mongoose, { Schema, Document } from "mongoose";

export interface IResume extends Document {
  userId: mongoose.Types.ObjectId;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary?: string;
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    school: string;
    degree: string;
    field: string;
    year: string;
  }>;
  skills: string[];
  projects: Array<{
    name: string;
    description: string;
    link?: string;
  }>;
  certifications?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ResumeSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    fullName: String,
    email: String,
    phone: String,
    location: String,
    summary: String,
    experience: [
      {
        company: String,
        position: String,
        duration: String,
        description: String
      }
    ],
    education: [
      {
        school: String,
        degree: String,
        field: String,
        year: String
      }
    ],
    skills: [String],
    projects: [
      {
        name: String,
        description: String,
        link: String
      }
    ],
    certifications: [String]
  },
  { timestamps: true }
);

export default mongoose.models.Resume ||
  mongoose.model<IResume>("Resume", ResumeSchema);
