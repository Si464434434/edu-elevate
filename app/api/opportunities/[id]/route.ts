import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Opportunity from "@/models/Opportunity";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const opportunity = await Opportunity.findById(params.id);

    if (!opportunity) {
      return NextResponse.json(
        { error: "Opportunity not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { opportunity },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const body = await request.json();

    const opportunity = await Opportunity.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    );

    return NextResponse.json(
      { opportunity },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    await Opportunity.findByIdAndDelete(params.id);

    return NextResponse.json(
      { message: "Opportunity deleted" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
