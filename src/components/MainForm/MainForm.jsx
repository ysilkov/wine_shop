import React from "react";
import style from "./MainForm.module.css";
import grape from "../../image/grape.png";
import barrel from "../../image/barrel.png"

const MainForm = () => {
  return (
    <div className={style.main_form}>
      
      <fieldset className={style.main_form_block}>
        <legend><h2>Запись на дегустацию</h2></legend>
        <img src={grape} alt="Grape"/>
        <img src={barrel} alt="Barrel"/>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim
          tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non
          sit sed fermentum.
        </p>
        <form>
          <div className={style.form}>
          <label>
            <input type={"text"} name="name" value={"Имя"}/>
         </label>
         <label>
            <input type={"text"} name="phone" value={"Телефон"}/>
         </label>
         </div>
         <label>
            <input type={"text"} name="address" value={" м.Полтава, вул. Перемоги України"}/>
         </label>
         <button>записаться</button>
        </form>
      </fieldset>
    </div>
  );
};

export default MainForm;
