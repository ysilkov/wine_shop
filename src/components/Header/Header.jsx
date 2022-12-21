import React from "react";
import { useState } from "react";
import style from "../Header/Header.module.css";
const Header = () => {
  const [headerMenuActive, setHeaderMenuActive] = useState(false);
  const activeMenu = () => {
    headerMenuActive === false
      ? setHeaderMenuActive(true)
      : setHeaderMenuActive(false);
  };
  return (
    <div className={style.header}>
      <div className={style.header_contacts}>
        <p>м.Полтава, вул. Перемоги України</p>
        <p>+38 (050) 777-77-77</p>
      </div>
      <div className={style.header_menu_icon} onClick={() => activeMenu()}>
        <span></span>
      </div>
      <div
        className={
          headerMenuActive ? style.header_menu_active : style.header_menu
        }
      >
        <p>Каталог</p>
        <hr />
        <p>Доставка</p>
        <hr />
        <p>Колекція</p>
        <hr />
        <p>Контакти</p>
      </div>
      <div className={style.header_main}>
        <button>Карта наших вин</button>
        <button>Дегустація</button>
      </div>
    </div>
  );
};

export default Header;
