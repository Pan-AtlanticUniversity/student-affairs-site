import mongoose from "mongoose";

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
const Member = mongoose.model("Member", memberSchema);

export default Member;
