import userModel from "../models/userModel";
import express from "express";
// import conn from "../database/connection";
import validate from "../util/validatorSchema";
import addUserSchema from "../schemas/user/add.json";

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const l = await userModel.getAll();
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
    const body = req.body;
    const { name, surname, birthday } = body;
    const user = await userModel.add(name, surname, birthday);
    // const validationStatus = validate(req.body, addUserSchema);
    // console.log(validationStatus[0]);
    // if (validationStatus[0] >= 300) {
    //   res.status(validationStatus[0]);
    //   return res.send(validationStatus[1]);
    // }

    return res.send({ _id: user._id });
    res.send(l);
  } catch (e) {
    res.send({ error: "Deu ruim" });
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
controller.login = async (req, res) => {
  try {
    const { username, password } = body;
    return res.send({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    });
  } catch (e) {
    res.statusCode(400);
    res.send({ error: "Username and/or password are/is incorrect." });
  }
};
