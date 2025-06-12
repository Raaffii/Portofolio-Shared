const express = require("express");
const routerGemini = express.Router();
const { runGemini } = require("../controllers/Gemini.js");

routerGemini.post("/runGemini", runGemini);

module.exports = routerGemini;
