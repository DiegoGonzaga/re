import express from "express";
require("dotenv-safe").config();
import bodyParser from "body-parser";
import connect from "./database/connection";
connect();

import userRoute from "./routes/userRoute";
import mainRoute from "./routes/mainRoute";
import mediaRoute from "./routes/mediaRoute";
import loginRoute from "./routes/loginRoute";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mainRoute(app);
userRoute(app);
mediaRoute(app);
loginRoute(app);

app.listen(process.env.PORT, () =>
  console.log(`Listening in port ${process.env.PORT}`)
);
