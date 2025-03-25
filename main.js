const express = require("express");
const { routers } = require("./router");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// parse application/json
app.use(bodyParser.json())

app.use("/api", routers);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
