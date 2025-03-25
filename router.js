const express = require("express");
const { routerQR } = require("./application/qr");

const routers = express.Router();

routers.use("/qr", routerQR)

module.exports = {
  routers,
};
