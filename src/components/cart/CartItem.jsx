import { Button, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import cl from "./Cart.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../Context/CartContextProvider";

const CartItem = ({ item }) => {
  const { changeProductCount, deleteCartProduct } = useCart();

  return (
    <Grid
      className={cl.cart__cont}
      container
      spacing={2}
      alignItems="center"
      style={{ borderRadius: "20px" }}
    >
      <Grid className={cl.cart__img}>
        <Box
          component="img"
          sx={{
            height: 50,
            width: 50,
          }}
          src={item.item.image}
          alt={item.item.title}
        />
      </Grid>
      <Grid className={cl.cart__title}>
        <Typography
          className={cl.cart__item}
          gutterBottom
          variant="p"
          component="div"
        >
          {item.item.title}
        </Typography>
      </Grid>
      <Grid>
        <Typography
          className={cl.cart__item}
          gutterBottom
          variant="p"
          component="div"
        >
          {item.item.type}
        </Typography>
      </Grid>
      <Grid>
        <Typography
          className={cl.cart__item}
          variant="p"
          color="text.secondary"
        >
          Price: {item.item.price}$
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          className={cl.cart__item}
          variant="p"
          color="text.secondary"
        >
          {/* {" "} */}
          <input
            className={cl.cart__input}
            type="number"
            value={item.count}
            onChange={(e) => changeProductCount(e.target.value, item.item.id)}
            min={1}
            max={100}
          ></input>
        </Typography>
      </Grid>
      <Grid>
        <Button
          style={{ color: "black", borderColor: "black" }}
          className={cl.del__btn}
          variant="outlined"
          size="small"
          onClick={() => deleteCartProduct(item.item.id)}
        >
          <CloseIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartItem;
