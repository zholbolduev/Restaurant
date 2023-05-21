import React from "react";
import cl from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={cl.footer_cont}>
      <h2
        style={{
          display: "flex",
          marginLeft: "12%",
          fontSize: "50px",
          color: "rgb(184, 184, 184)",
        }}
      >
        Контакты
      </h2>
      <hr style={{ width: "70%", color: "white", marginLeft: "11%" }} />
      <div className={cl.map_cont}>
        <div className={cl.map__left}>
          <div>
            <ul className={cl.cont__item}>
              <li className={cl.item__text}>
                191028 Манежный пер.2 ,Санкт-Петербург
              </li>
              <li className={cl.item__text}>Время работы : 12:00-23:00</li>
              <li className={cl.item__text}>Телефон: +7 (969) 711-24-24</li>
              <li className={cl.item__text}>Резерв: Yclients</li>
            </ul>
            <ul>
              <li className={cl.item__text}>
                Присоединиться к нам - makers@gmail.com
              </li>
              <li className={cl.item__text}>
                Коммерческие предложения - makers.com@mail.ru
              </li>
            </ul>
            <div>
              <img
                className={cl.logos}
                src="https://cdn-icons-png.flaticon.com/512/5968/5968940.png"
                alt="t"
              />
              <img
                className={cl.logos}
                src="https://www.iconpacks.net/icons/1/free-whatsapp-icon-121-thumb.png"
                alt="t"
              />

              <img
                className={cl.logos}
                src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                alt="t"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                className={cl.map}
                width="550"
                height="400"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=санкт петербург&t=&z=10&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              {/* <a href="https://2yu.co">2yu</a> */}
              <style>
                .mapouter
                {"position:relative;text-align:right;height:400px;width:600px;"}
              </style>
              {/* <a href="https://embedgooglemap.2yu.co">html embed google map</a> */}
              <style>
                .gmap_canvas{" "}
                {
                  "overflow:hidden;background:none!important;height:400px;width:600px;"
                }
              </style>
            </div>
          </div>
        </div>
      </div>
      <div className={cl.bottom__box}>
        <div className={cl.bottom}>Makers </div>
      </div>
    </div>
  );
};

export default Footer;
