import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Resume from "@/models/Resume";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("authToken")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "secret"
    ) as any;

    await connectDB();
    const resume = await Resume.findOne({ userId: decoded.userId });

    return NextResponse.json(
      { resume },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("authToken")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "secret"
    ) as any;

    const body = await request.json();

    await connectDB();

    const resume = await Resume.findOneAndUpdate(
      { userId: decoded.userId },
      { ...body, userId: decoded.userId },
      { new: true, upsert: true }
    );

    return NextResponse.json(
      { message: "Resume saved", resume },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
