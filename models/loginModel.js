import mongoose from "mongoose";
import conn from "../database/connection";

const loginSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    user_id: String,
  },
  { collection: "logins" }
);

const model = mongoose.model("logins", loginSchema);
const loginModel = {};
/**
 *
 * @param {String} login
 * @returns
 */
loginModel.getLogin = (login) => {
  const l = model.findOne({ login });
  return l;
};

/**
 *
 * @param {String} user_id
 * @param {String} username
 * @param {String} password
 */
loginModel.add = (user_id, username, password) => {
  model.create({ user_id, username, password });
};

loginModel.authenticate = (username, password) => {
  return {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  };
};

export default loginModel;
