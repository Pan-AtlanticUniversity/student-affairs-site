import mongoose from "mongoose";

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
const Counsellor = mongoose.model("Counsellor", counsellorSchema);

export default Counsellor;
