import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  user: String,
  book: String,
  bookData: Object,
  status: {
    type: String,
    default: "active",
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
});

const Cart = mongoose.model("cart", cartSchema);

export default Cart;
