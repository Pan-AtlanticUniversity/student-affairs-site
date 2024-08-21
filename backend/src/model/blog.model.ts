import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
  image: String,
  read_count: { type: Number, default: 0 },
});
const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
