const express = require("express");
const cors = require("cors");
const routerAdmin = require("./src/routes/Admin.js");
const routerGemini = require("./src/routes/Gemini.js");

const app = express();
app.use(express.json());
const port = 3000;

app.use(
  cors({
    origin: "*", // Memungkinkan semua origin untuk mengakses API
  })
);

app.listen(port, () => {
  console.log("server berjalan di port 3000");
});
app.get("/", (req, res) => {
  res.json("hello ZIPIY");
});

app.use("/admin", routerAdmin);
app.use("/api", routerGemini);
