import React from "react";
import style from "./Main.module.css";
import logo from "../../image/glass.png";

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.main_information}>
        <div className={style.main_information_block}>
          <h3>Лучший вкус, это вкус долголетнего вина</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi
            sit non sit sed fermentum. Felis adipiscing morbi sodales ac. Mauris
            dictumst risus pulvinar blandit elit. Vestibulum quam ultrices
            nascetur et viverra suscipit. Proin vitae aliquet leo aliquam amet
            rutrum. Lectus auctor purus ultrices enim ultrices. Augue fringilla
            tellus tortor orci ultrices sed. Viverra cras sapien, pellentesque
            viverra malesuada. Tellus dolor, eget vitae dignissim molestie eget
            sit duis. Vitae dui vel pretium euismod diam. Pellentesque amet,
            lacus, amet, quis risus. Pellentesque scelerisque nunc, orci aliquam
            quis.
          </p>
          <img src={logo} alt="Glass" />
        </div>
      </div>
    </div>
  );
};

export default Main;
