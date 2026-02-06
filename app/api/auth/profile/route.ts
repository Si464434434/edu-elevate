import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("authToken")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "No token found" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "secret"
    ) as any;

    await connectDB();
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          stream: user.stream,
          city: user.city,
          university: user.university,
          bio: user.bio
        }
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Invalid token" },
      { status: 401 }
    );
  }
}
