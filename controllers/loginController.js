import loginModel from "../models/loginModel";
import express from "express";
import validate from "../util/validatorSchema";

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const l = await mediaModel.getAll();
    res.send(l);
  } catch (e) {
    res.send(e);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
controller.login = async (req, res) => {
  try {
    const { token, error } = loginModel.authenticate();
    if (token) return res.send({ token });
    res.statusCode(401);
    return res.send({ error: "Username and/or password are/is incorrect." });
  } catch (e) {
    res.send(e);
  }
};

export default controller;
