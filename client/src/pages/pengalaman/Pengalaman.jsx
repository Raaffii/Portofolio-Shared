import { useState, useEffect } from "react";
import ItemPengalaman from "./ItemPengalaman";
import "./pengalaman.css";
import Loading from "../share/Loading";

export default function Pengalaman() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://myportofolioserver.vercel.app/admin/getpengalaman");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const responseData = await response.json();
        setList(responseData.data);
      } catch (err) {
        setError("gagal memuat data");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return (
    <section className='about section ' id='experience'>
      <h2 className='section-title experience-title'>
        Experience <span className='swagy-font-back'>Me</span>
      </h2>
      <ul>{!loading ? list.map((data, index) => <ItemPengalaman namaPerusahaan={data.perusahaan} gambar={data.gambar} status={data.status} tanggal_mulai={data.tanggal_mulai} tanggal_selesai={data.tanggal_selesai} text={data.text} key={index} />) : <Loading />}</ul>
    </section>
  );
}
