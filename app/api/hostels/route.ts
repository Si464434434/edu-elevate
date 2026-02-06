import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Hostel from '@/models/Hostel';

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const city = searchParams.get('city');
    const type = searchParams.get('type');
    const maxPrice = searchParams.get('maxPrice');

    const filter: any = {};
    if (city) filter.city = { $regex: city, $options: 'i' };
    if (type) filter.type = type;
    if (maxPrice) filter.pricePerMonth = { $lte: parseInt(maxPrice) };

    const hostels = await Hostel.find(filter).select('-reviews');
    return NextResponse.json(hostels);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch hostels' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    const hostel = new Hostel(body);
    await hostel.save();

    return NextResponse.json(hostel, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create hostel' }, { status: 500 });
  }
}
