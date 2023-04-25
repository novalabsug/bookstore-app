import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import { v4 as uniqueString } from "uuid";
import validator from "validator";
import {
  TryCatch,
  ValidationError,
  VerificationError,
} from "../utils/utils.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import Book from "../models/Book.js";
import Cart from "../models/Cart.js";
import Checkout from "../models/Checkout.js";

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

  if (!isEmail(email.toString())) throw VerificationError("Email is invalid");

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
        accountType: user.accountType,
      },
      token,
      status: "Success",
    });
  }
});

export const signupUserPost = TryCatch(async (req, res, next) => {
  const { fullname, email, password } = req.body;

  if (fullname == "") throw ValidationError("Name is required");

  if (email == "") throw ValidationError("Email is required");

  if (!isEmail(email.toString())) throw VerificationError("Email is invalid");

  // check if user already exists
  if (await User.findOne({ email }))
    throw ValidationError("Account already exists");

  if (password == "") throw ValidationError("Password is required");

  const NewUser = new User({ fullname, email, password });

  NewUser.save();

  setTimeout(() => {
    signinUserPost(req, res, next);
  }, 2000);
});

export const newBookPost = TryCatch(async (req, res, next) => {
  const { title, price, publishedDate, authors, details, BookData } = req.body;

  if (title == "") throw ValidationError("Title is required");
  if (price == "") throw ValidationError("Price is required");
  if (publishedDate == "") throw ValidationError("Published Date is required");
  if (details == "") throw ValidationError("Details is required");
  if (authors == "") throw ValidationError("Author is required");

  const categories = [...new Set(JSON.parse(BookData).categories)];

  if (categories.length < 1) throw ValidationError("Book category is required");

  const NewBook = new Book({
    title,
    price,
    publishedDate,
    authors,
    details,
    categories,
    thumbnail: req.file.path,
  });

  NewBook.save();

  res.status(200).json({ status: "Success" });
});

export const fetchBooks = TryCatch(async (req, res, next) => {
  const Books = await Book.find();

  res.status(200).json({ status: "Success", Books });
});

export const fetchBook = TryCatch(async (req, res, next) => {
  const ID = req.params.id;

  if (!ID) throw new Error("Unknown error has occured");

  const BookData = await Book.findOne({ _id: ID });

  res.status(200).json({ status: "Success", Book: BookData });
});

export const deleteBook = TryCatch(async (req, res, next) => {
  const ID = req.params.id;

  if (!ID) throw new Error("Unknown error has occured");

  await Book.findOneAndRemove({ _id: ID });

  res.status(200).json({ status: "Success" });
});

export const fetchSearchBook = TryCatch(async (req, res, next) => {
  const searchValue = req.params.search;

  if (!searchValue) throw new Error("Unknown error has occured");

  const Books = await Book.find();

  let BooksData = [];

  if (Books.length < 1) res.status(200).json({ status: "Success", Book: [] });

  for (let i = 0; i < Books.length; i++) {
    // check if search param is a title
    if (
      Books[i].title
        .toString()
        .toLowerCase()
        .indexOf(searchValue.toString().toLowerCase()) > -1
    ) {
      BooksData.push(Books[i]);
    } else if (
      // check if search param is a authors
      Books[i].authors
        .toString()
        .toLowerCase()
        .indexOf(searchValue.toString().toLowerCase()) > -1
    ) {
      BooksData.push(Books[i]);
    } else if (checkIfCategory(Books[i])) {
      // check if search param is a categories
      BooksData.push(Books[i]);
    } else {
      BooksData = [...BooksData];
    }
  }

  function checkIfCategory(book) {
    let result = false;

    for (const category of book.categories) {
      if (
        category
          .toString()
          .toLowerCase()
          .indexOf(searchValue.toString().toLowerCase()) > -1
      ) {
        result = true;
      }
    }

    return result;
  }

  res.status(200).json({ status: "Success", Books: BooksData });
});

export const fetchCart = TryCatch(async (req, res, next) => {
  const ID = req.params.id;

  if (!ID) throw new Error("Unknown error has occured");

  const CartData = await Cart.find({ user: ID, status: "active" });

  for (const cart of CartData) {
    let cartItem = await Book.findOne(
      { _id: cart.book },
      { title: 1, price: 1, authors: 1, thumbnail: 1 }
    );
    cart.bookData = cartItem;
  }

  res.status(200).json({ status: "Success", Cart: CartData });
});

export const newCartPost = TryCatch(async (req, res, next) => {
  const { user, book } = req.body;

  const BookData = await Cart.findOne({ book, user });

  if (BookData) throw VerificationError("Book already in cart");

  const NewCart = new Cart({ user, book });

  NewCart.save();

  res.status(200).json({ status: "Success" });
});

export const deleteCart = TryCatch(async (req, res, next) => {
  const ID = req.params.id;

  if (!ID) throw new Error("Unknown error has occured");

  await Cart.findOneAndRemove({ _id: ID });

  res.status(200).json({ status: "Success" });
});

export const checkoutPost = TryCatch(async (req, res, next) => {
  const { CartItems, CartTotalData, user } = req.body;

  if (
    (CartItems != "" && !CartItems) ||
    (CartTotalData != "" && !CartTotalData)
  )
    throw VerificationError("Expected parameters not found");

  const NewCheckout = new Checkout({
    user,
    cartItems: CartItems,
    cartTotal: CartTotalData,
  });

  NewCheckout.save();

  for (const cartItem of CartItems) {
    await Cart.findOneAndUpdate({ _id: cartItem.id }, { status: "checkedout" });
  }

  res.status(200).json({ status: "Success" });
});

export const fetchCheckouts = TryCatch(async (req, res, next) => {
  const CheckoutsData = await Checkout.find();

  for (const checkout of CheckoutsData) {
    let user = await User.findOne({ _id: checkout.user }, { fullname: 1 });
    checkout.user = user.fullname;
  }

  res.status(200).json({ status: "Success", CheckoutsData });
});

export const fetchCheckout = TryCatch(async (req, res, next) => {
  const ID = req.params.id;

  if (!ID) throw new Error("Unknown error has occured");

  const CheckoutData = await Checkout.findOne({ _id: ID });

  const UserData = await User.findOne({ _id: CheckoutData.user });

  const Books = [];

  for (const cartItem of CheckoutData.cartItems) {
    Books.push(await Book.findOne({ _id: cartItem.book }));
  }

  res
    .status(200)
    .json({ status: "Success", Data: { CheckoutData, UserData, Books } });
});
