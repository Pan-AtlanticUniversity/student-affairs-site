import mongoose from "mongoose";
import { withMediaUrls } from "../media";

const bookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
bookSchema.plugin(withMediaUrls("image"));
const Book = mongoose.model("Book", bookSchema);

export default Book;