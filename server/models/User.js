import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import { AuthenticationError } from "../utils/utils.js";

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
});

// hash password
userSchema.pre("save", async function (next) {
  this.password = await bcryptjs.hash(this.password, 10);
  next();
});

// static function to login
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const auth = await bcryptjs.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw AuthenticationError("Incorrect password");
  }
  throw AuthenticationError("User not found. Please check the email entered");
};

const User = mongoose.model("user", userSchema);

export default User;
