import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL!); //! is not null
    const connection = mongoose.connection;

    //database connection
    connection.on("connected", () => {
      console.log("MongoDB Connected Successfully");
    });

    //database connection error
    connection.on("error", (err) => {
      console.log(
        "MongoDB Connection Error. Please make sure MongoDB is running" + err,
      );
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
  }
}
