import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to MONGO");
  } catch (err) {
    console.log("can't coonect to db");
  }
};

export default connectToMongoDB;
