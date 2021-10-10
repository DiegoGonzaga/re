import Express from "express";

let b = 0;

/**
 * @param {Express} server
 */
export default (server) => {
  server.get("/", (req, res) => {
    b = b + 1;
    res.send(`GET request to the homepage. Nº${b}`);
  });
};
