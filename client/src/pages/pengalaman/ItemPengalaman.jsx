export default function ItemPengalaman({ namaPerusahaan, status, tanggal_mulai, tanggal_selesai, text, gambar }) {
  return (
    <div className='about__container bd-grid'>
      <div className='about__img img__work'>
        <div className='about__img img__work pengalaman'>
          <img src={`pengalaman/${gambar}`} alt='' />
          <div className='info-pengalaman'>
            <h4>Intership</h4>
            <h5>{tanggal_mulai}</h5>
            <h5>{tanggal_selesai}</h5>
          </div>
        </div>
      </div>

      <div className='info-nama-keterangan'>
        <h3 className='about__subtitle info-kerja'>{namaPerusahaan}</h3>
        <p className='about__text  info-kerja'>{text}</p>
      </div>
    </div>
  );
}
