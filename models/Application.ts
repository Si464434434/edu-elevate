import mongoose, { Schema, Document } from "mongoose";

export interface IApplication extends Document {
  userId: mongoose.Types.ObjectId;
  opportunityId: mongoose.Types.ObjectId;
  status: "applied" | "interview" | "selected" | "rejected" | "pending";
  appliedDate: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ApplicationSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    opportunityId: {
      type: Schema.Types.ObjectId,
      ref: "Opportunity",
      required: true
    },
    status: {
      type: String,
      enum: ["applied", "interview", "selected", "rejected", "pending"],
      default: "applied"
    },
    appliedDate: { type: Date, default: Date.now },
    notes: String
  },
  { timestamps: true }
);

export default mongoose.models.Application ||
  mongoose.model<IApplication>("Application", ApplicationSchema);
