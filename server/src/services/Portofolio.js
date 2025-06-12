const { Cl_pengalaman } = require("../models/Cl_pengalaman");
const { Cl_kontak } = require("../models/Cl_kontak");
const { Cl_proyek } = require("../models/Cl_proyek");

const getData = async () => {
  const data = await Cl_pengalaman.find({});
  return data;
};

const kirimKontak = async (data) => {
  console.log("helo");
  console.log(data);
  Cl_kontak.insertMany(data);
};

const getDataProyek = async () => {
  const data = await Cl_proyek.find({});
  return data;
};

module.exports = { getData, kirimKontak, getDataProyek };
