import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
    nameOfClub: String,
    school: String
});
const Club = mongoose.model("Club", clubSchema);

export default Club;