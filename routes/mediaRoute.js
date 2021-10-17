import Express from "express";
import mediaController from "../controllers/mediaController";
/**
 * @param {Express} server
 */
export default (server) => {
  server.route("/medias").get(mediaController.getAll);
  server.route("/medias").post(mediaController.add);
};
