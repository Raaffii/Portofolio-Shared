const { getData, kirimKontak, getDataProyek } = require("../services/Portofolio.js");

const getPengalaman = async (req, res) => {
  const data = await getData();
  res.status(200).json({ data });
};

const postKontak = async (req, res) => {
  try {
    // Mengirimkan data ke fungsi kirimKontak
    await kirimKontak(req.body);
    // Mengirimkan respons sukses setelah data dimasukkan ke database
    res.status(200).json({ message: "Pesan berhasil dikirim" });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Gagal mengirim pesan" });
  }
};

const getProyek = async (req, res) => {
  const data = await getDataProyek();
  res.status(200).json({ data });
};

module.exports = { getPengalaman, postKontak, getProyek };
