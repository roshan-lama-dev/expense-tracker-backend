import mongoose from "mongoose";

export const connectMongo = () => {
  try {
    const mogonUrl = "mongodb://127.0.0.1:27017/ft_aug_b";
    // mongoose.set("strictQuery", true);
    const connect = mongoose.connect(mogonUrl);

    connect && console.log("Mongo DB Connected");
  } catch (error) {
    console.log(error.message, "Form the connectMongoDb");
  }
};
