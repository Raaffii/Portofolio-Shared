const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rafirabbani:rafisukses@portofolio.9hymj.mongodb.net/portofolio");

const Cl_kontak = mongoose.model("kontak", {
  nama: {
    type: String,
  },
  email: {
    type: String,
  },
  text: {
    type: String,
  },
});

module.exports = { Cl_kontak };
