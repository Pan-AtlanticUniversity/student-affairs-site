import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: String,
  content: String,
  image: String,
});
const Service = mongoose.model("Service", serviceSchema);

export default Service;
