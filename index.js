const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = new express();
app.use(bodyParser.json());
app.use(cors());

app.listen({ port: 3000 }, () => {
  console.log("listening at http://localhost:3000/ for REST API requests");
});

app.use("/login", express.static("public/loginPage.html"));

app.get("/", (req, res) => {
  let response = "<h3>Test app</h3>";
  response += " ok hello test";
  res.send(response);
});
