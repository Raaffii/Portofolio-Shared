const express = require("express");
const routerAdmin = express.Router();
const { getPengalaman, postKontak, getProyek } = require("../controllers/Portofolio.js");

routerAdmin.get("/getpengalaman", getPengalaman);
routerAdmin.get("/getproyek", getProyek);
routerAdmin.post("/postkontak", postKontak);

module.exports = routerAdmin;
