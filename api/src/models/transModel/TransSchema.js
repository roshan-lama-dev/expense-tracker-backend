import mongoose from "mongoose";

const transSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "active",
    },

    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Transaction", transSchema); //it will convert into users
