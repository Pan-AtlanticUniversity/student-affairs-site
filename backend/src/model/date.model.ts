import mongoose from "mongoose";

const dateSchema = new mongoose.Schema({
    date: String,
    event: String,
});
const Date = mongoose.model("Date", dateSchema);

export default Date;