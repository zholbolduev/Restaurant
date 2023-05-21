// export default Modal;
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Cart from "../cart/Cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import React from "react";
import AddCardIcon from "@mui/icons-material/AddCard";
import cl from "../CreditCard/CredCard.module.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalCart = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className={cl.navb__it}>
        <a class="menu__item" onClick={handleOpen}>
          Корзина
        </a>
        <a class="menu__item" onClick={() => navigate("/credit")}>
          Способ оплаты
        </a>
        <a class="menu__item" onClick={() => navigate("/menulist")}>
          меню и сет
        </a>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Корзина
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            товар
          </Typography> */}
          <Cart />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalCart;
