import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RequestSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const Request = mongoose.model("Request", RequestSchema);
