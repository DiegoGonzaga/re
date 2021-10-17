import mongoose from "mongoose";
import conn from "../database/connection";

const mediaSchema = new mongoose.Schema(
  {
    name: String,
    type_media_id: String,
    chapterEpisode: Array,
  },
  { collection: "medias" }
);

const model = mongoose.model("medias", mediaSchema);

const mediaModel = {};

/**
 *
 * @returns {Array}
 */
mediaModel.getAll = () => {
  return model.find({});
};

export default mediaModel;
