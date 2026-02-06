import mongoose, { Schema, Document } from "mongoose";

export interface IOpportunity extends Document {
  title: string;
  description: string;
  type: "internship" | "scholarship" | "hackathon" | "competition" | "event";
  company?: string;
  stipend?: string;
  duration?: string;
  location: string;
  stream: string[]; // CSE, ECE, ME, etc.
  deadline: Date;
  link: string;
  verified: boolean;
  savedBy: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const OpportunitySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: {
      type: String,
      enum: ["internship", "scholarship", "hackathon", "competition", "event"],
      required: true
    },
    company: String,
    stipend: String,
    duration: String,
    location: { type: String, required: true },
    stream: [String], // Multiple streams
    deadline: { type: Date, required: true },
    link: { type: String, required: true },
    verified: { type: Boolean, default: false },
    savedBy: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  { timestamps: true }
);

export default mongoose.models.Opportunity ||
  mongoose.model<IOpportunity>("Opportunity", OpportunitySchema);
