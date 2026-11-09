import mongoose from "mongoose";
import { withMediaUrls } from "../media";

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  mail: String,
  meeting_times: String,
});
mentorSchema.plugin(withMediaUrls("image"));
const Mentor = mongoose.model("Mentor", mentorSchema);

export default Mentor;
