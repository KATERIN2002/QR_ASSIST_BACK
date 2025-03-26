const express = require("express");
const { routers } = require("./router");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

// parse application/json
app.use(bodyParser.json())

app.use("/api", routers);

app.get("/", (req, res) => {
  res.send("Hello World! assistance successful");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
