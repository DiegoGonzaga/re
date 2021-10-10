import mongoose from "mongoose";

let conn;
const connect = async () => {
  if (conn == undefined) {
    const str_connection = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONDO_DB}`;
    conn = await mongoose
      .connect(str_connection)
      .then(console.log("connected"));
  }
  return conn;
};
export default connect;
