import connectToDB from "./lib/server";

export async function register() {
  await connectToDB();
}
