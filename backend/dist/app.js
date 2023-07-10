"use strict";

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const db = require("./src/models");
//db.sequelize.sync({alter:true}).then(console.log("Se vor updata modificarile aduse tabelelor bazei de date"));
const PORT = 3000;
const path = require('path');
app.set("view engine", "pug");
app.set("views", path.resolve("./src/views"));
const router = express.Router();
app.use(router);
const rootPath = path.resolve("./dist");
app.use(express.static(rootPath));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
require("./src/routes/jucator.routes")(app);


app.listen(PORT, err => {
  if (err) return console.log(`Cannot Listen on PORT:${PORT}`);
  console.log(`Server is listening on: http://localhost:${PORT}/`);
});