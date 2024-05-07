import connectToDB from "@/lib/server";
import Banner from "@/models/Banner";
import BannerModel from "@/models/Banner";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
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

export const getBannerById = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    await connectToDB();

    const { id } = req.query as { id: string };

    const banner = await Banner.findById(id);

    if (!banner) {
      return res.status(404).json({ error: "Banner not found" });
    }

    return res.status(200).json(banner);
  } catch (error) {
    console.error("Error occurred while fetching banner:", error);
    return res.status(500).json({ error: "Failed to fetch banner" });
  }
};
