import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../Home/Home.css";
import Footer from "../../footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="oneback">
        <img
          className="timg"
          src="https://thumb.tildacdn.com/tild6266-6166-4237-b637-636230646265/-/resize/990x/-/format/webp/Snimok-ekrana-2022-1.png"
          alt="Here img"
        />
        <button className="trbtn" onClick={() => navigate("/products")}>
          Меню
        </button>
        <button className="trbtn2" onClick={() => navigate("/menulist")}>
          Подарочный Сертификат
        </button>
      </div>
      <div className="back">
        <div class="tn-atom" field="tn_text_1470209944682">
          О РЕСТОРАНЕ
        </div>
        <br></br>
        <div class="bl" style={{ marginBottom: "50px" }}></div>
        <Swiper className="mySwiper" style={{ marginLeft: "15%" }}>
          <SwiperSlide>
            <img
              src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana2.jpg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana6.jpg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana8.jpg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana12.jpg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://roomester.ru/wp-content/uploads/2019/06/dizajn-restorana35.jpg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div className="allAbout">
          <div className="about">
            В 2015 году на конкурсе San Pellegrino Young Chef, где Эльдар
            Мурадов был участником, Дмитрий Богачев стал его наставником. В
            результате этого наставничества Эльдар стал лучшим поваром региона и
            поехал представлять родину на финале конкурса в Милане.
          </div>
          <div className="lin"></div>
          <div className="about2">
            Эта история стала судьбоносной — Дмитрий и Эльдар поняли, что
            находятся на одной волне и готовы двигаться дальше в поисках
            собственного уникального пути.
          </div>
          <div className="lin"></div>

          <div className="about">
            От мысли о создании собственного ресторана до его открытия прошло 2
            года — и вот мир увидел Mr. Bo. Новый, необычный даже для
            искушённого ресторанного Питера проект, выбил 3 страйка подряд:
            азиатское направление/необычные вкусовые сочетания/смелость на грани
            дерзости.
          </div>
          <div className="lin"></div>

          <div className="about2">
            Азия была выбрана не случайно, не в дань моде на суши, поке и
            рамены. Яркость, огромная палитра сильных и насыщенных вкусов,
            которыми можно бесконечно жонглировать, открывая новые оттенки — это
            неиссякаемый источник эмоций, которыми повар и гость обмениваются
            друг с другом.
          </div>
        </div>
        <div
          style={{ marginTop: "200px", marginBottom: "30px", color: "white" }}
          className="tn-atom"
          field="tn_text_1470209944682"
        >
          МЕНЮ
        </div>
        <div class="bl" style={{ marginBottom: "50px", color: "white" }}></div>
        <Swiper className="mySwiper" style={{ marginLeft: "15%" }}>
          <SwiperSlide>
            <img
              src="https://thumb.tildacdn.com/tild6563-3038-4461-b937-323763356462/-/format/webp/__.jpeg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://thumb.tildacdn.com/tild3362-6664-4437-b464-373866393734/-/format/webp/mrbooysters.jpeg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://thumb.tildacdn.com/tild3039-3533-4637-b031-656133623233/-/format/webp/__2.jpeg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://thumb.tildacdn.com/tild6565-3833-4139-b231-306263386535/-/format/webp/__67.jpeg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://thumb.tildacdn.com/tild6261-3861-4063-a637-616239373762/-/format/webp/0X8A3301.jpeg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://thumb.tildacdn.com/tild3436-3865-4161-a431-656562646661/-/format/webp/0X8A3792.jpeg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://thumb.tildacdn.com/tild3136-3132-4765-b637-383231623864/-/format/webp/0X8A3823.jpeg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://thumb.tildacdn.com/tild3534-3638-4432-b937-363665323931/-/format/webp/__.jpg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://thumb.tildacdn.com/tild3831-6262-4432-a530-333038326163/-/format/webp/0X8A3905.jpeg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://thumb.tildacdn.com/tild3463-6235-4437-b530-383766313465/-/format/webp/0X8A9909.jpg"
              width={"80%"}
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <div className="p">
          В меню Mr. Bo нет канонических традиционных рецептов: каждое блюдо —
          результат поиска нового, экстраординарного, неожиданного. Устрицы со
          страчателлой или маракуйей, бегония и алоэ, гребешок с соусом из
          халапеньо, — читаешь меню, как захватывающий кулинарный роман.
        </div>
        <button className="btn" onClick={() => navigate("/menulist")}>
          Подробнее
        </button>

        <Footer />
      </div>
    </>
  );
};

export default Home;
