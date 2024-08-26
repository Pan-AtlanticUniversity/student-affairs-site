import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
  club_name: String,
  image: String,
  about: String,
  member_count: { type: Number, default: 0 },
  meeting_time: { type: Date, default: Date.now },
  social_media_handles: [
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
const Club = mongoose.model("Club", clubSchema);

export default Club;
