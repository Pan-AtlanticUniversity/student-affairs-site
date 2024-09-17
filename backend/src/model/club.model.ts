import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    value: String,
    background: String,
  },
  about: String,
  member_count: { type: Number, default: 0 },
  meeting_time: { type: String, default: Date.now.toString() },
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
const Club = mongoose.model("Club", clubSchema);

export default Club;
