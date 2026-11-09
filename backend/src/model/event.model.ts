import mongoose from "mongoose";
import { withMediaUrls } from "../media";

const eventSchema = new mongoose.Schema({
  date: { required: true, type: String },
  name: { required: true, type: String },
  content: { required: true, type: String },
  image: { required: true, type: String },
});
eventSchema.plugin(withMediaUrls("image"));
const Event = mongoose.model("Event", eventSchema);

export default Event;
