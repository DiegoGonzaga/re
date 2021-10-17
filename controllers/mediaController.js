import mediaModel from "../models/mediaModel";
import express from "express";
import conn from "../database/connection";
import validate from "../util/validatorSchema";
import addMediaSchema from "../schemas/medias/add.json";

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const l = await mediaModel.getAll();
    res.send(l);
  } catch (e) {
    res.send(e);
  }
};

export default controller;

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
controller.add = async (req, res) => {
  try {
    const validationStatus = validate(req.body, addMediaSchema);
    if (validationStatus[0] >= 300) {
      res.status(validationStatus[0]);
      return res.send(validationStatus[1]);
    }

    return res.send("t");
    await mediaModel.find({});
    res.send(l);
  } catch (e) {
    res.send(e);
  }
};
