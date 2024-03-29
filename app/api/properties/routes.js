import connectDB from "@/config/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();

    return NextResponse.json();
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something Went Wrong!" },
      { status: 500 }
    );
  }
};
