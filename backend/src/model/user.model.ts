import mongoose, { Document } from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

interface IUser extends Document {
  fullname: string;
  email: string;
  password: string;
  getToken: () => string;
  comparePassword: (password: string) => Promise<boolean>;
}

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please provide a name"],
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 8,
  },
});

userSchema.methods.getToken = function () {
  const token = jwt.sign(
    { name: this.fullname.split(" ")[0] },
    process.env.ACCESS_SECRET as string,
    { expiresIn: "48h" }
  );
  return token;
};

userSchema.methods.comparePassword = async function (password: string) {
  const isMatched = await bcryptjs.compare(password, this.password);
  return isMatched;
};

userSchema.pre("save", async function (next) {
  this.password = await bcryptjs.hash(this.password, 10);
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
