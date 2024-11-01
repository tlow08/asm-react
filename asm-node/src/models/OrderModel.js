import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      title: String,
      quantity: Number,
      price: Number,
    },
  ],
  isPayment:{
    type: String,
    required: true,
  }
}, 
{timestamps: true, versionKey: false}
);

export default mongoose.model("Order", orderSchema);

