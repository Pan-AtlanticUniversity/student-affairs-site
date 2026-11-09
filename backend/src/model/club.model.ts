import mongoose from "mongoose";
import { withMediaUrls } from "../media";

const clubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    value: String,
    background: String,
  },
  logo: String,
  banner: String,
  about: String,
  member_count: { type: Number, default: 0 },
  meeting_time: String,
  handles: [
    {
      handle: String,
      url: String,
    },
  ],
  executives: [
    {
      full_name: String,
      image: String,
      post: String,
    },
  ],
});
clubSchema.plugin(withMediaUrls("image.value", "logo", "banner", "executives.image"));
const Club = mongoose.model("Club", clubSchema);

export default Club;
