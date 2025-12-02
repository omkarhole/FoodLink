import mongoose from "mongoose";

const foodRequestSchema = new mongoose.Schema({
  foodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food",
    required: true,
  },
  requesterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  requestDate: {
    type: Date,
    default: Date.now,
  },
  userId:{
    type:String
  }
});

const FoodRequest = mongoose.model("FoodRequest", foodRequestSchema);

export default FoodRequest;