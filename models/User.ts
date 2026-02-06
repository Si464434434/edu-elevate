import mongoose, { Schema, Document } from "mongoose";
import bcryptjs from "bcryptjs";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone?: string;
  stream?: string;
  city?: string;
  university?: string;
  profilePicture?: string;
  bio?: string;
  savedOpportunities: mongoose.Types.ObjectId[];
  appliedOpportunities: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    phone: String,
    stream: String, // CSE, ECE, Civil, etc.
    city: String,
    university: String,
    profilePicture: String,
    bio: String,
    savedOpportunities: [{ type: Schema.Types.ObjectId, ref: "Opportunity" }],
    appliedOpportunities: [{ type: Schema.Types.ObjectId, ref: "Application" }]
  },
  { timestamps: true }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function (password: string) {
  return bcryptjs.compare(password, this.password);
};

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
