import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, IconButton, CardActionArea, CardActions } from "@mui/material";
import axios from "axios";
import { API_PRODUCTS } from "../../const";
import { Link } from "react-router-dom";
import "../Product/MyCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildIcon from "@mui/icons-material/Build";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { productContext } from "../Context/ProductContextProvider";
import { useCart } from "../Context/CartContextProvider";

export default function MyCard({ product }) {
  const { deleteProduct } = React.useContext(productContext);
  const { addProductToCart } = useCart();

  return (
    <div class="container">
      <div class="box">
        <b></b>
        <CardMedia
          component="img"
          image={product.image}
          alt="green iguana"
        />{" "}
        <div
          class="content"
          style={{
            backgroundColor: "transparent",
            fontSize: "23px",
            color: "white",
          }}
        >
          <div>
            {" "}
            <div
              gutterBottom
              variant="h5"
              component="div"
              style={{ marginTop: "100px" }}
            >
              {product.title}{" "}
            </div>{" "}
            <div>{product.price}</div>
          </div>
          <ul class="sci">
            <CardActions>
              <IconButton
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  cursor: "pointer",
                }}
                class="fab fa-tiktok"
                size="small"
                color="error"
                onClick={() => deleteProduct(product.id)}
              >
                <DeleteIcon />
              </IconButton>
              <Link to={`/edit/${product.id}`}>
                <IconButton
                  size="small"
                  color="success"
                  class="fab fa-tiktok"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <BuildIcon />
                </IconButton>
              </Link>
            </CardActions>
            <li>
              <IconButton
                onClick={() => {
                  addProductToCart(product);
                }}
                style={{
                  color: "red",
                  height: "31px",
                }}
              >
                <FavoriteIcon />
              </IconButton>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            {/* <li>
              <a href="#">
                <i class="fab fa-tiktok"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a> */}
            {/* </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
