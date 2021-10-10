import mongoose from "mongoose";
import conn from "../database/connection";

const userSchema = new mongoose.Schema(
  {
    nome: String,
    sobrenome: String,
  },
  { collection: "users" }
);

export default mongoose.model("users", userSchema);
