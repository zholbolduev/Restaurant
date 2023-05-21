import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
// import NavbarProd from "../NavbarProd";
import CartItem from "./CartItem";
import cl from "./Cart.module.css";
import { useCart } from "../Context/CartContextProvider";

const Cart = () => {
  const { cart, getCart, clearCart, credit } = useCart();
  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      {/* <NavbarProd /> */}
      <h2 style={{ textAlign: "center" }}>My Cart</h2>
      <div>
        {cart?.products.map((cartItem) => {
          {
            return <CartItem item={cartItem} key={cartItem.item.id} />;
          }
        })}
      </div>
      <Container centered style={{ color: "red" }}>
        <Button
          style={{
            "background-color": "rgb(77, 42, 0)",
            borderRadius: "10px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            direction: "column",
          }}
          className={cl.buy__btn}
          variant="outlined"
          onClick={credit}
        >
          BUY
        </Button>
        <Typography
          style={{
            width: "200px",
            height: "25px",
            borderRadius: "10px",
            textAlign: "center",
            fontSize: "large",
            margin: "0 auto",
            padding: "10px 10px",
            justifyContent: "center",
          }}
          fontSize={21}
        >
          {" "}
          Total Price: {cart?.totalPrice}$
        </Typography>
      </Container>
    </>
  );
};

export default Cart;
