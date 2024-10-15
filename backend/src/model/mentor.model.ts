import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  mail: String,
  meeting_times: String,
});
const Mentor = mongoose.model("Mentor", mentorSchema);

export default Mentor;
