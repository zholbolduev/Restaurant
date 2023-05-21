import {
  Box,
  FormControlLabel,
  Pagination,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { createTheme } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "../../footer/Footer";
import Navbar from "../Navbar/Navbar";
import MyCard from "./MyCard";
import "../Product/ProductList.css";
import { productContext } from "../Context/ProductContextProvider";

const ProductList = () => {
  const { getProducts, products, fetchByParams, pages } =
    useContext(productContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const count = Math.ceil(products.length / 6);

  function currentData() {
    const begin = (currentPage - 1) * 6;
    const end = begin + 6;
    return products.slice(begin, end);
  }

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: value,
    });
  }, [value]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  return (
    <div
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1130714046/photo/empty-dark-wooden-table-in-front-of-abstract-blurred-bokeh-background-of-restaurant-can-be.jpg?b=1&s=170667a&w=0&k=20&c=81AFO47LmBWjAa8643R4JO4bFyBRPAkYlH23Cc6t3Cw=)",

        backgroundSize: "cover",
        backgroundColor: "transparent",

        backgroundPosition: "bottom",
        backgroundAttachment: "fixed",
      }}
    >
      <div>
        <Navbar />
        <div>
          <span>
            <h1
              style={{
                color: "white",
                marginLeft: "14%",
                fontWeight: "inherit",
                marginTop: "100px",
              }}
            >
              Menu
            </h1>
          </span>
        </div>
        <hr style={{ width: "70%", marginLeft: "15%" }} />
        <p className="p-text" style={{ color: "white" }}>
          Дорогие гости, <br />
          мы работаем для Вас <br />в режиме доставки с 12:00 до 22:30
        </p>
        <div id="wrapper">
          <form
            action=""
            autocomplete="on"
            style={{ backgroundColor: "transparent" }}
          >
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              className="inpp"
              name="search"
              placeholder="Search..."
              autocomplete="off"
            />
            <input className="subb" type="submit" />
          </form>
        </div>
      </div>
      {/* ///////////////////////////// */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "32px", width: "1200px" }}>
          <RadioGroup
            style={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              margin: "0 auto",
              // width: "1200px",
              textAlign: "center",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            // onChange={(e) => fetchByParams("type", e.target.value)}
            onChange={(e) => fetchByParams("category", e.target.value)}
            name="radio-buttons-group"
          >
            <FormControlLabel
              sx={{ width: "120px", fontSize: "2rem" }}
              value="all"
              control={<Radio color="success" />}
              label="все"
            />
            <FormControlLabel
              sx={{ width: "120px" }}
              value="ff"
              control={<Radio color="success" />}
              label="фаст-фуд"
            />
            <FormControlLabel
              sx={{ width: "120px" }}
              value="soda"
              control={<Radio color="success" />}
              label="напитки"
            />

            <FormControlLabel
              sx={{ width: "120px" }}
              value="noodle"
              control={<Radio color="success" />}
              label="лапша"
            />
          </RadioGroup>
        </div>
      </div>
      {/* ///////////////////////////// */}

      <Box
        className="ermm"
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {currentData().map((product, index) => (
          <MyCard product={product} getProducts={getProducts} key={index} />
        ))}
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={count}
          page={currentPage}
          variant="outlined"
          color="success"
          onChange={(e, p) => setCurrentPage(p)}
        />
      </Box>
      <Footer />
    </div>
  );
};

export default ProductList;
