import mongoose from "mongoose";
import { withMediaUrls } from "../media";

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  mail: String,
  phone: String,
  post: String,
});
memberSchema.plugin(withMediaUrls("image"));
const Member = mongoose.model("Member", memberSchema);

export default Member;
