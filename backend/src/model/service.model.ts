import mongoose from "mongoose";
import { withMediaUrls } from "../media";

const serviceSchema = new mongoose.Schema({
  name: String,
  content: String,
  image: String,
});
serviceSchema.plugin(withMediaUrls("image"));
const Service = mongoose.model("Service", serviceSchema);

export default Service;
