import userModel from "../models/userModel";
import express from "express";
// import conn from "../database/connection";
import conn from "../database/connection";
import validate from "../util/validatorSchema";
import addUserSchema from "../schemas/user.json";

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const l = await userModel.find({});
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
    const validationStatus = validate(req.body, addUserSchema);
    console.log(validationStatus[0]);
    if (validationStatus[0] >= 300) {
      res.status(validationStatus[0]);
      return res.send(validationStatus[1]);
    }

    return res.send();
    await userModel.find({});
    res.send(l);
  } catch (e) {
    res.send(e);
  }
};
