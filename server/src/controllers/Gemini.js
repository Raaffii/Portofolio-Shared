const { run } = require("../services/Gemini.js");

const runGemini = async (req, res) => {
  try {
    // Log body request yang diterima
    console.log(req.body.prompt);
    // Misalnya fungsi 'run' yang mengembalikan respons dari AI
    const responseText = await run(req.body.prompt);

    // Mengirimkan respon kembali ke client (React)
    res.json({ response: responseText });
  } catch (error) {
    // Jika ada error, kirimkan status error
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
};

module.exports = { runGemini };
