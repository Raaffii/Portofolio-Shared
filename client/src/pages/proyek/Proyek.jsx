import { useEffect, useState } from "react";
import ItemProyek from "./ItemProyek";
import "./proyek.css";
import Loading from "../share/Loading";

export default function Proyek() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [pengumuman, setPengumuman] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://myportofolioserver.vercel.app/admin/getproyek");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const responseData = await response.json();
        setList(responseData.data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return (
    <section
      className='work section'
      id='works'
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h2 className='section-title'>
        Work <span className='swagy-font-front'>My</span>
      </h2>
      {pengumuman && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <h4 style={{ minWidth: "30rem" }} className='pengumuman swagyrelative'>
            New Project Is <span style={{ color: "gold" }}>COMING SOON</span> : Ielts Writing Website Test And Result
          </h4>
          <button className='button' onClick={() => setPengumuman(false)}>
            close
          </button>
        </div>
      )}

      {!loading ? (
        <div className='work__container bd-grid'>
          {list.map((item, index) => (
            <ItemProyek judul={item.judul} deskripsi={item.deskripsi} gambar={item.gambar} status={item.status} key={index} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}
