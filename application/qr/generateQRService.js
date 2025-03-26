const QRCode = require("qrcode");

const generateQRService = (req, res) => {
  let qr = "";

  QRCode.toString(
    "https://gxxqktgc-3000.use.devtunnels.ms/",
    function (err, string) {
      if (err) throw err;
      qr = string;
      console.log(string);
    }
  );

  console.log("┗|｀O′|┛┗|｀O′|┛");

  res
    .status(200)
    .json({ qrString: qr, url: "https://gxxqktgc-3000.use.devtunnels.ms/" });
};

module.exports = {
  generateQRService,
};
