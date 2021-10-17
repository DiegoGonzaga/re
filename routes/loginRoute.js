import Express from "express";
import loginController from "../controllers/loginController";
/**
 * @param {Express} server
 */
export default (server) => {
  server.route("/login").post(loginController.login);
};
