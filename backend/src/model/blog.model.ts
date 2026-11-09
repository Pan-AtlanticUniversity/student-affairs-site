import mongoose from "mongoose";
import { withMediaUrls } from "../media";

const blogSchema = new mongoose.Schema({
  name: String,
  content: String,
  date: { type: Date, default: Date.now },
  image: String,
  author: String,
  read_count: { type: Number, default: 0 },
});
blogSchema.plugin(withMediaUrls("image"));
const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
