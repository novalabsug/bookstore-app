import mongoose from "mongoose";

const checkoutSchema = mongoose.Schema({
  user: String,
  cartItems: Array,
  cartTotal: Number,
  createdOn: {
    type: Date,
    default: new Date(),
  },
});

const Checkout = mongoose.model("checkout", checkoutSchema);

export default Checkout;
