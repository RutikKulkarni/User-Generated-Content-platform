import mongoose, { Document } from "mongoose";
import bcrypt from "bcryptjs";

interface UserDocument extends Document {
  fullName: string;
  email: string;
  password: string;
  role: "BRAND" | "CREATOR";
  _id: string;
  hashPassword(password: string): Promise<string>;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["BRAND", "CREATOR"],
    },
  },
  { timestamps: true }
);

userSchema.methods.hashPassword = async function (
  password: string
): Promise<string> {
  const salt: string = await bcrypt.genSalt(10);
  const hashedPassword: string = await bcrypt.hash(password, salt);
  return hashedPassword;
};

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  const user = this;
  return await bcrypt.compare(password, user.password);
};

const userModel = mongoose.model<UserDocument>("User", userSchema);

export { userModel, UserDocument };
