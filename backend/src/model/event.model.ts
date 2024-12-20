import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  date: { required: true, type: String },
  name: { required: true, type: String },
  content: { required: true, type: String },
  image: { required: true, type: String },
});
const Event = mongoose.model("Event", eventSchema);

export default Event;
