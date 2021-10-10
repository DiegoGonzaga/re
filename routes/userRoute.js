import Express from "express";
import userController from "../controllers/userController";
/**
 * @param {Express} server
 */
export default (server) => {
  server.route("/users").get(userController.getAll);
  server.route("/users").post(userController.add);
};
