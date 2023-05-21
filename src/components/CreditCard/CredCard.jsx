import React from "react";
import Footer from "../../footer/Footer";
import cl from "./CredCard.module.css";

const CredCard = () => {
  return (
    <div className="">
      <body className={cl.bodySt}>
        <div className={cl.container}>
          <div className={cl.form}>
            <form action="#">
              <div className={cl.flexrow}>
                <label for="card-number">Card Number</label>
                <input
                  name="card-number"
                  className={cl.cardnumber}
                  type="text"
                  DefaultValue=""
                />
              </div>
              <div className={cl.flexrow}>
                <label for="card-name">Holder Name</label>
                <input
                  name="card-name"
                  className={cl.cardname}
                  type="text"
                  DefaultValue=""
                />
              </div>
              <div className={cl.flexrow}>
                <table>
                  <tr>
                    <td className={cl.tablecolumn}>
                      <label for="month">Expiration Date</label>
                      <select name="month" id="month-select">
                        <option value="Month" selected disabled>
                          Month
                        </option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                      <select name="year" id="year-select">
                        <option value="Year" selected disabled>
                          Year
                        </option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                      </select>
                      <td className={cl.tablecolumn}>
                        <label for="card-cvv">CVV</label>
                        <input
                          name="card-cvv"
                          className={cl.cardcvv}
                          type="text"
                          DefaultValue=""
                        />
                      </td>
                    </td>
                  </tr>
                </table>
              </div>
              <div className={cl.flexrow}>
                <input className={cl.cardsubmit} type="submit" />
              </div>
            </form>
            <img
              className={cl.cardimage}
              src="https://pngimg.com/uploads/credit_card/credit_card_PNG99.png"
              alt="Card image"
            />
            <div className={cl.cardimageshadow}></div>
          </div>
        </div>
      </body>
      <div
        className="f"
        style={{
          backgroundImage:
            "url(https://oir.mobi/uploads/posts/2021-03/1616546225_45-p-chernii-fon-na-rabochii-stol-48.jpg)",
          backgroundPositionY: "bottom",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default CredCard;
