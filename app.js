import express from "express";
require("dotenv-safe").config();
import bodyParser from "body-parser";
import connect from "./database/connection";
connect();

import userRoute from "./routes/userRoute";
import mainRoute from "./routes/mainRoute";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mainRoute(app);
userRoute(app);

app.listen(process.env.PORT, () =>
  console.log(`Listening in port ${process.env.PORT}`)
);
