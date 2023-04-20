import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import { v4 as uniqueString } from "uuid";
import validator from "validator";
import { TryCatch, ValidationError } from "../utils/utils.js";
import User from "../models/User.js";

dotenv.config();

const { isEmail } = validator;

// env variables
const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const awsAccessKey = process.env.AWS_ACCESS_KEY;
const awsSecretKey = process.env.AWS_SECRET_KEY;
const jwtSign = process.env.JWT_SECRET_SIGN;

// const s3 = new S3Client({
//   credentials: {
//     accessKeyId: awsAccessKey,
//     secretAccessKey: awsSecretKey,
//   },
//   region: bucketRegion,
// });

// create tokens
const maxAge = 2 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, jwtSign, {
    expiresIn: maxAge,
  });
};

export const signinUserPost = TryCatch(async (req, res, next) => {
  const { email, password } = req.body;

  if (email == "") throw ValidationError("Email is required");

  if (password == "") throw ValidationError("Password is required");

  // login user
  const user = await User.login(email, password);

  if (user) {
    const token = createToken(user._id);
    res.cookie("book store jwt server secret", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
      secure: true,
    });
    res.status(200).json({
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
      token,
      status: "Success",
    });
  }
});
