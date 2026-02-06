import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Mentor from "@/models/Mentor";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const mentors = await Mentor.find({ verified: true })
      .sort({ rating: -1 });

    return NextResponse.json(
      { mentors },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
