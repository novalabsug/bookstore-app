import { Router } from "express";
import {
  deleteBook,
  fetchBook,
  fetchBooks,
  fetchCart,
  fetchSearchBook,
  newBookPost,
  newCartPost,
  signinUserPost,
  signupUserPost,
  deleteCart,
  checkoutPost,
  fetchCheckouts,
  fetchCheckout,
} from "../controller/controller.js";
import multer from "multer";
import { v4 as uniqueString } from "uuid";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, uniqueString() + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = Router();

router.post("/account/signin", signinUserPost);
router.post("/account/signup", signupUserPost);
router.post("/data/book/new", upload.single("thumbnail"), newBookPost);
router.get("/data/books", fetchBooks);
router.get("/data/book/:id", fetchBook);
router.get("/data/book/search/:search", fetchSearchBook);
router.delete("/data/book/:id", deleteBook);
router.delete("/data/cart/delete/:id", deleteCart);
router.get("/data/cart/:id", fetchCart);
router.post("/data/cart/new", newCartPost);
router.post("/data/checkout", checkoutPost);
router.get("/data/checkouts", fetchCheckouts);
router.get("/data/checkout/:id", fetchCheckout);

export default router;
