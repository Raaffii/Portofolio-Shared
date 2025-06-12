const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rafirabbani:rafisukses@portofolio.9hymj.mongodb.net/portofolio");

const Cl_pengalaman = mongoose.model("pengalamans", {
  perusahaan: {
    type: String,
  },
});

module.exports = { Cl_pengalaman };
