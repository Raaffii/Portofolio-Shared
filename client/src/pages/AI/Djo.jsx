import "./djo.css";
import { useState, useEffect } from "react";

export default function Djo() {
  const [Djo, setDjo] = useState(false);
  const [tanya, setTanya] = useState("");
  const [tanyaAuto, setTanyaAuto] = useState("");
  const [prompt, setPrompt] = useState("");
  const [sent, setSent] = useState("");

  async function changeToReal(kata) {
    kata = kata.replace("Mark", "Rafi Rabbani");
    kata = kata.replace("Sabasa", "Semen Indonesia Logistik");
    kata = kata.replace("Teknosa", "ImpactByte Teknologi Edukasi");
    kata = kata.replace("Qwords", "Qwords Company Internasional");
    kata = kata.replace("Kopinosa", "remenkopi");

    return kata;
  }

  async function runAI(prompt) {
    try {
      // Membuat data untuk dikirimkan ke server
      const data = { prompt: prompt };

      // Mengirimkan request POST ke server
      const response = await fetch("https://myportofolioserver.vercel.app/api/runGemini", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Mengecek apakah respon dari server berhasil
      if (response.ok) {
        // Mengambil data hasil respon dari server
        const responseData = await response.json();
        console.log(responseData);
        return responseData.response;
        // Menampilkan hasil respon dari server
      } else {
        console.error("Terjadi kesalahan pada request:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function sentPrompt(event) {
    if (event) {
      event.preventDefault();
    }
    const education = "peryataan : mark alumni UPN Veteran Jawa Timur tesis nya berjudul makanoapako masuk sinta 3";
    const experience = "PT sabasa : mengerjakan proyek digitalisasi pkl, PT teknosa : membuat design ui ux untuk digital course dan redesign mitra kita bisa, PT qwords : Meredesign llanding page perusahaan, Freelance : kopinosa, mengerjakan proyek sistem manajemen penjualan";
    const skills = "Express JS, React JS, Codeigniter, Flask, Laravel, Mysql, MongoDB, Bootstrap, CSS, Figma, Blender ";

    let realTanya = tanya;
    realTanya = realTanya.replace("Rafi Rabbani", "mark");
    realTanya = realTanya.replace("Rafi", "mark");
    realTanya = realTanya.replace("rafi", "mark");

    setSent(tanyaAuto ? tanyaAuto : tanya);
    const answer = await runAI(`${education}.${experience}.${skills}." pertayaan". ${realTanya}. "jawab 2 baris saja anda adalah pemandu yang memahami mark"`);

    const realAnswer = await changeToReal(answer);
    setPrompt(realAnswer);
    setTanyaAuto("");
  }

  async function handleClick(word) {
    setTanyaAuto(word);
  }

  useEffect(() => {
    if (tanyaAuto) {
      // Pastikan state tanya sudah diperbarui
      sentPrompt(); // Panggil sentPrompt setelah state tanya terupdate
    }
  }, [tanyaAuto]);

  return (
    <>
      <button className='scroll-btn' onClick={() => setDjo(!Djo)}>
        <img src='theme/iconAi.png' alt='' width='30' />
      </button>

      {Djo && (
        <div className='card'>
          <button className='close-btn' onClick={() => setDjo(!Djo)}>
            X
          </button>
          <h3>Ask AI About Me</h3>
          {sent && (
            <div className='prompt-container left-container'>
              <img src='theme/iconUser.png' alt='' className='r-label' width='30' />
              <p className='prompt-text'> {sent}</p>
            </div>
          )}
          {prompt && (
            <div className='prompt-container right-container'>
              <p className='prompt-text'>{prompt}</p>
              <img src='theme/iconAi.png' alt='' className='r-label' width='30' />
            </div>
          )}

          <form action='' onSubmit={sentPrompt}>
            <div className=''>
              <button type='button' className='klikask' onClick={() => handleClick("apa skills rafi")}>
                Skills ?
              </button>
              <button type='button' className='klikask' onClick={() => handleClick("apa pengalaman rafi")}>
                Experience ?
              </button>
            </div>
            <div className='div-form'>
              <input type='text' placeholder='Enter something' onChange={(e) => setTanya(e.target.value)} />
              <button className='button' type='submit'>
                kirim
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
