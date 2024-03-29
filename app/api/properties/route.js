import connectDB from "@/config/db";
import { NextResponse } from "next/server";
import Property from "@/models/Property";

// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB();

    const properties = await Property.find({});

    return NextResponse.json({ properties }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something Went Wrong!" },
      { status: 500 }
    );
  }
};
