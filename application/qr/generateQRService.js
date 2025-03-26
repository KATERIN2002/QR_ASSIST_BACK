const QRCode = require("qrcode");

const generateQRService = (req, res) => {
  let qr = "";

  QRCode.toString(
    "https://gzqz068f-3000.use2.devtunnels.ms/",
    function (err, string) {
      if (err) throw err;
      qr = string;
      console.log(string);
    }
  );

  console.log("┗|｀O′|┛┗|｀O′|┛");

  res
    .status(200)
    .json({ qrString: qr, url: "https://gzqz068f-3000.use2.devtunnels.ms/" });
};

module.exports = {
  generateQRService,
};
