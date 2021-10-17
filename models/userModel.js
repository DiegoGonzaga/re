import mongoose from "mongoose";
import conn from "../database/connection";

const userSchema = new mongoose.Schema(
  {
    name: String,
    surname: String,
    birthday: Number,
  },
  { collection: "users" }
);

const model = mongoose.model("users", userSchema);

const userModel = {};

userModel.getAll = () => {
  return model.find({});
};

/**
 *
 * @param {String} name
 * @param {String} surname
 * @param {Number} birthday
 */
userModel.add = async (name, surname, birthday) => {
  const user = await model.create({ name, surname, birthday });
  return user;
};
export default userModel;
