const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rafirabbani:rafisukses@portofolio.9hymj.mongodb.net/portofolio");

const Cl_proyek = mongoose.model("proyek", {
  judul: {
    type: String,
  },
  gambar: {
    type: String,
  },
});

module.exports = { Cl_proyek };
