import React from "react";
import style from "./Footer.module.css";
import vk from "../../image/vk.png";
import youtube from "../../image/youtube.png";
import facebook from "../../image/facebook.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_block}>
        <div className={style.footer_menu}>
          <p>Главная</p>
          <p>Каталог</p>
          <p>Поставщики</p>
          <p>Коллекции</p>
          <p>Дегустация</p>
          <p>Коллекция 2020</p>
          <p>Контакты</p>
        </div>
        <div className={style.footer_information}>
          <p>винный бутик LE CORTE</p>
          <hr />
          <p>8 (812) 123-45-67</p>
          <hr />
          <div className={style.footer_information_images}>
            <img src={vk} alt="VK" />
            <img src={youtube} alt="Youtube" />
            <img src={facebook} alt="Facebook" />
          </div>
          <hr />
          <p>© le-corte.ru</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
