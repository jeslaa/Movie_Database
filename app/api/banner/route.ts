import connectToDB from "@/lib/server";
import Banner from "@/models/Banner";
import BannerModel from "@/models/Banner";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  await connectToDB();
  const data = await Banner.find();
  return NextResponse.json(data);
};

export const POST = async (req: NextRequest) => {
  try {
    await connectToDB();
    const data = await req.json();
    const newBanner = new BannerModel(data);
    await newBanner.save();
    return NextResponse.json(newBanner);
  } catch (error) {
    console.error("Error occurred while adding banner:", error);
    return NextResponse.error();
  }
};
