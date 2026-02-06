import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Hostel from '@/models/Hostel';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const hostel = await Hostel.findById(params.id);
    
    if (!hostel) {
      return NextResponse.json({ error: 'Hostel not found' }, { status: 404 });
    }
    
    return NextResponse.json(hostel);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch hostel' }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const body = await req.json();

    const hostel = await Hostel.findByIdAndUpdate(params.id, body, { new: true });
    
    if (!hostel) {
      return NextResponse.json({ error: 'Hostel not found' }, { status: 404 });
    }
    
    return NextResponse.json(hostel);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update hostel' }, { status: 500 });
  }
}
