import React from "react";
import Footer from "../footer/Footer";
import cl from "./Menu.module.css";

const MenuList = () => {
  return (
    <div>
      <div className={cl.menuimg__title}>
        <h2 className={cl.menu__title}>МЕНЮ И СЕТ</h2>
      </div>
      <hr />
      <div className={cl.menuimg__cont}>
        <img
          className={cl.menu__img}
          src={require("../components/Image/menu.png")}
          alt=""
        />
      </div>
      <div className={cl.menuimg__title}>
        <h2 className={cl.menu__title}>МЕНЮ И СЕТ</h2>
      </div>
      <hr />
      <div className={cl.wine__img}>
        <img
          className={cl.menu__img}
          src={require("../components/Image/wine.png")}
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default MenuList;
