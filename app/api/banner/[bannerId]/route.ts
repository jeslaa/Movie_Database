import Banner from "@/models/Banner";
import { NextResponse } from "next/server";

export const getbannersById = async (bannerId: string) => {
  try {
    const banner = await Banner.findById(bannerId);
    return banner;
  } catch (error) {
    throw new Error("Error fetching banner by ID");
  }
};

export const GET = async (req: Request, context: any) => {
  const { params } = context;
  const bannerId = params.bannerId;

  try {
    const banner = await getbannersById(bannerId);
    return NextResponse.json({
      banner,
    });
  } catch (error) {
    return NextResponse.error();
  }
};
