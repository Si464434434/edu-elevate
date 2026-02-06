import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { name, email, password, confirmPassword } = await request.json();

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    // Create user
    const newUser = await User.create({
      name,
      email,
      password
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET || "secret"
    );

    const response = NextResponse.json(
      {
        message: "User registered successfully",
        token,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email
        }
      },
      { status: 201 }
    );

    // Set httpOnly cookie
    response.cookies.set("authToken", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30 // 30 days
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Registration failed" },
      { status: 500 }
    );
  }
}
