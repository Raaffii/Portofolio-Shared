import "./Aboutme.css";

export default function Aboutme() {
  return (
    <section className='about section ' id='about'>
      <h2 className='section-title'>
        About <span className='swagy-font-back'>Me</span>
      </h2>

      <div className='about__container bd-grid'>
        <div className='about__img'>
          <img src='rafi2.png' alt='' />
        </div>

        <div>
          <h2 className='about__subtitle'>I'am Rafi</h2>
          <p className='about__text'>
            I like <span>Web development</span>, I enjoy implementing <span>machine learning</span>, and <span>I like you</span>
          </p>
        </div>
      </div>
    </section>
  );
}
