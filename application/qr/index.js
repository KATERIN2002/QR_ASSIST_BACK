const express = require("express");
const { generateQRService } = require("./generateQRService");

const routerQR = express.Router();

routerQR.get("/generateQR", generateQRService);

module.exports = {
  routerQR,
};
