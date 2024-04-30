import mongoose from "mongoose";

const mongoDB = process.env.MONGODB_URI;

const connectToDB = async () => {
  if (!mongoDB) return console.log("MONGODB_URL not found");
  try {
    await mongoose.connect(mongoDB);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
