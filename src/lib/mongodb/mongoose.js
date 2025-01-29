import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("Already connected to mongodb");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next_blog",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongodb");
    initialized = true;
  } catch (error) {
    console.log("Error connecting to mongodb: ", error);
  }
};
