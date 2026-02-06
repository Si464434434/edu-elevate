import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Application from "@/models/Application";
import User from "@/models/User";
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
    const applications = await Application.find({ userId: decoded.userId })
      .populate("opportunityId");

    return NextResponse.json(
      { applications },
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

    const { opportunityId } = await request.json();

    await connectDB();

    const existingApp = await Application.findOne({
      userId: decoded.userId,
      opportunityId
    });

    if (existingApp) {
      return NextResponse.json(
        { error: "Already applied" },
        { status: 409 }
      );
    }

    const application = await Application.create({
      userId: decoded.userId,
      opportunityId
    });

    return NextResponse.json(
      { message: "Applied successfully", application },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
