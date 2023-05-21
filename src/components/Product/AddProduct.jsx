import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../Context/ProductContextProvider";

const AddProduct = () => {
  const { addProducts } = useContext(productContext);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  return (
    <div>
      <Box>
        <TextField
          fullWidth
          sx={{ m: 1 }}
          variant="outlined"
          id="standart-basic"
          label="title"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />

        <TextField
          fullWidth
          sx={{ m: 1 }}
          variant="outlined"
          id="standart-basic"
          label="price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />

        <TextField
          fullWidth
          sx={{ m: 1 }}
          variant="outlined"
          id="standart-basic"
          label="image"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <Button onClick={() => addProducts(product)}>Add Product</Button>
      </Box>
    </div>
  );
};

export default AddProduct;
