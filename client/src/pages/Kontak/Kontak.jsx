import { useState } from "react";

export default function Kontak() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [terkirim, setTerkirim] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validasi input form (misalnya pastikan semua field terisi)
    if (!name || !email || !text) {
      alert("Harap isi semua kolom sebelum mengirim.");
      return;
    }

    const data = {
      nama: name,
      email: email,
      text: text,
    };

    try {
      const response = await fetch("https://myportofolioserver.vercel.app/admin/postkontak", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Cek apakah response.ok benar
      if (!response.ok) {
        throw new Error(`Server error: ${response.status} - ${response.statusText}`);
      }

      const responseData = await response.json();

      // Jika berhasil, atur status terkirim menjadi true
      setTerkirim(true);
      console.log("Response Data:", responseData); // Pastikan respons dari server sesuai dengan yang diharapkan

      // Mengecek apakah request berhasil
    } catch (err) {
      console.error("Terjadi kesalahan:", err);
      alert("Gagal mengirim pesan. Coba lagi nanti.");
    }
  };

  return (
    <section className='contact section' id='contact'>
      <h2 className='section-title'>Contact</h2>
      <div className='contact__container bd-grid'>
        <form action='' className='contact__form' onSubmit={submitHandler}>
          <input type='text' name='name' placeholder='Name' className='contact__input' onChange={(e) => setName(e.target.value)} disabled={terkirim} />
          <input type='email' name='email' placeholder='Email' className='contact__input' onChange={(e) => setEmail(e.target.value)} disabled={terkirim} />
          <textarea name='text' id='' cols='0' rows='10' className='contact__input' onChange={(e) => setText(e.target.value)} disabled={terkirim}></textarea>
          <button type='submit' value='Enviar' className='contact__button button' disabled={terkirim}>
            {terkirim ? "Terkirim " : "Kirim"}
            {terkirim && <i className='fa-solid fa-envelope-circle-check'></i>}
          </button>
        </form>
      </div>
    </section>
  );
}
