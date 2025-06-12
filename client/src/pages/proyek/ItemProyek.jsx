export default function ItemProyek({ judul, deskripsi, gambar, status }) {
  return (
    <a href='' className='work__img '>
      <div className='image-container'>
        <img src={`proyek/${gambar}`} alt='' />

        {status === "offline" ? (
          <div className='online-tag offline' id='statusTag'>
            {status}
          </div>
        ) : (
          <div className='online-tag online' id='statusTag'>
            {status}
          </div>
        )}
      </div>
      <div className='work-info'>
        <h3>{judul}</h3>
        <p>{deskripsi}</p>
      </div>
    </a>
  );
}
