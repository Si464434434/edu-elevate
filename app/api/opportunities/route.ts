import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Opportunity from "@/models/Opportunity";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const stream = searchParams.get("stream");
    const search = searchParams.get("search");

    let query: any = {};

    if (type) query.type = type;
    if (stream) query.stream = { $in: [stream] };
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } }
      ];
    }

    const opportunities = await Opportunity.find(query)
      .sort({ deadline: 1 })
      .limit(50);

    return NextResponse.json(
      { opportunities },
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
    await connectDB();
    const body = await request.json();

    const opportunity = await Opportunity.create(body);

    return NextResponse.json(
      { message: "Opportunity created", opportunity },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
