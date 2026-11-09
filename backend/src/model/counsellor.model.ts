import mongoose from "mongoose";
import { withMediaUrls } from "../media";

const counsellorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber:String,
  emailAddress: String,
  course: String,
  level:String, 
  time: String,
  image: String,
  
});
counsellorSchema.plugin(withMediaUrls("image"));
const Counsellor = mongoose.model("Counsellor", counsellorSchema);

export default Counsellor;
