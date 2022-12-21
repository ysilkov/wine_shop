import React from "react";
import style from "./MainNew.module.css";
import glasses from "../../image/glass_second.png";
import bootle1 from "../../image/bootle1.png";
import bootle2 from "../../image/bootle2.png";

const MainNew = () => {
  return (
    <div className={style.main_new}>
      <hr />
      <div className={style.main_new_block}>
        <div className={style.main_new_information}>
          <p>Новинки коллекций</p>
          <h2>Март 1980 Урожай Марселя</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi
            sit non sit sed fermentum. Felis adipiscing morbi sodales ac.
          </p>
          <table>
            <tr>
              <td>1980</td>
              <td>
                <span>Colli Euganei Bianco Ca' Lustra 1980</span> <br />
                <span>Красочная бутылка вина из Марселя</span>
              </td>
            </tr>
            <tr>
              <td>1980</td>
              <td>
                <span>Colli Euganei Bianco Ca' Lustra 1980</span> <br />
                <span>Красочная бутылка вина из Марселя</span>
              </td>
            </tr>
            <tr>
              <td>1980</td>
              <td>
                <span>Colli Euganei Bianco Ca' Lustra 1980</span> <br />
                <span>Красочная бутылка вина из Марселя</span>
              </td>
            </tr>
          </table>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi
            sit non sit sed fermentum. Felis adipiscing morbi sodales ac.
          </p>
          <button>узнать подробнее</button>
        </div>
        <div className={style.main_new_pictures}>
          <div className={style.main_new_main_picture}>
            <img src={glasses} alt="Glasses" />
          </div>
          <div className={style.main_new_second_pictures}>
            <img src={bootle1} alt="Bootle" />
            <img src={bootle2} alt="Bootle" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default MainNew;
