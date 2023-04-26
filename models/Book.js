import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  price: Number,
  publishedDate: Date,
  thumbnail: String,
  authors: String,
  categories: Array,
  details: String,
  createdOn: {
    type: Date,
    default: new Date(),
  },
});

const Book = mongoose.model("book", bookSchema);

export default Book;
