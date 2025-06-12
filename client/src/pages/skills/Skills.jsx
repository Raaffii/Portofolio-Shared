import { useState, useEffect } from "react";
import "./skills.css";

export default function Skills() {
  const [isSolid, setIsSolid] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSolid((prev) => !prev);

      setKey((prevKey) => {
        const newKey = prevKey + 1;
        return newKey > 8 ? 0 : newKey;
      });
    }, 300);

    return () => clearInterval(interval); // Membersihkan interval saat komponen dihapus
  }, []);
  return (
    <section className='skills section' id='skills'>
      <h2 className='section-title'>
        Skills <span className='swagy-font-front'>My</span>
      </h2>

      <div className='skills__container bd-grid'>
        <div>
          <div className='skills__data'>
            <div className='skills__names'>
              <i className='bx  skills__icon'>
                <i className='fa-brands fa-node-js'></i>
              </i>

              <span className='skills__name'>Node JS</span>
            </div>
            <div className='skills__bar skills__html'></div>
            <div>
              <span className='skills__percentage swagyrelative'>
                <i className={`fa-${(isSolid && key == 1) || key == 0 ? "solid" : "regular"} fa-star shake`}></i>
              </span>
            </div>
          </div>

          <div className='skills__data'>
            <div className='skills__names'>
              <i className='bx  skills__icon'>
                <i className='fa-solid fa-e'></i>
              </i>
              <span className='skills__name'>Express JS</span>
            </div>
            <div className='skills__bar skills__html'></div>
            <div>
              <span className='skills__percentage swagyrelative'>
                <i className={`fa-${(isSolid && key == 2) || key == 0 ? "solid" : "regular"} fa-star shake`}></i>
              </span>
            </div>
          </div>

          <div className='skills__data'>
            <div className='skills__names'>
              <i className='bx  skills__icon'>
                <i className='fa-brands fa-react'></i>
              </i>
              <span className='skills__name'>React Js</span>
            </div>
            <div className='skills__bar skills__html'></div>
            <div>
              <span className='skills__percentage swagyrelative'>
                <i className={`fa-${(isSolid && key == 3) || key == 0 ? "solid" : "regular"} fa-star shake`}></i>
              </span>
            </div>
          </div>
          <div className='skills__data'>
            <div className='skills__names'>
              <i className='bx  skills__icon'>
                <i className='fa-solid fa-t'></i>
              </i>
              <span className='skills__name'>Tailwind</span>
            </div>
            <div className='skills__bar skills__html'></div>
            <div>
              <span className='skills__percentage swagyrelative'>
                <i className={`fa-${(isSolid && key == 4) || key == 0 ? "solid" : "regular"} fa-star shake`}></i>
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className='skills__data'>
            <div className='skills__names'>
              <i className='bx  skills__icon'>
                <i className='fa-solid fa-fire'></i>
              </i>
              <span className='skills__name'>Codeigniter</span>
            </div>
            <div className='skills__bar skills__html'></div>
            <div>
              <span className='skills__percentage swagyrelative'>
                <i className={`fa-${(isSolid && key == 5) || key == 0 ? "solid" : "regular"} fa-star shake`}></i>
              </span>
            </div>
          </div>
          <div className='skills__data'>
            <div className='skills__names'>
              <i className='bx  skills__icon'>
                <i className='fa-solid fa-leaf'></i>
              </i>
              <span className='skills__name'>Mongo DB</span>
            </div>
            <div className='skills__bar skills__html'></div>
            <div>
              <span className='skills__percentage swagyrelative'>
                <i className={`fa-${(isSolid && key == 6) || key == 0 ? "solid" : "regular"} fa-star shake`}></i>
              </span>
            </div>
          </div>
          <div className='skills__data'>
            <div className='skills__names'>
              <i className='bx  skills__icon'>
                <i className='fa-solid fa-database'></i>
              </i>
              <span className='skills__name'>MySql</span>
            </div>
            <div className='skills__bar skills__html'></div>
            <div>
              <span className='skills__percentage swagyrelative'>
                <i className={`fa-${(isSolid && key == 7) || key == 0 ? "solid" : "regular"} fa-star shake`}></i>
              </span>
            </div>
          </div>
          <div className='skills__data'>
            <div className='skills__names'>
              <i className='bx  skills__icon'>
                <i className='fa-solid fa-pepper-hot'></i>
              </i>
              <span className='skills__name'>Flask</span>
            </div>
            <div className='skills__bar skills__html'></div>
            <div>
              <span className='skills__percentage swagyrelative'>
                <i className={`fa-${(isSolid && key == 8) || key == 0 ? "solid" : "regular"} fa-star shake`}></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
