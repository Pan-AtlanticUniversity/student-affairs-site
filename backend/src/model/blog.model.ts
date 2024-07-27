import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    name: String,
    news: Number,
    date: String,
    image: String,
    
});
const Blog = mongoose.model("Blog", blogSchema);

export default Blog;