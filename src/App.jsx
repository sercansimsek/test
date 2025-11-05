import { useState } from "react";
import { Card } from "./components/Card";
import { Cart } from "./components/Cart";
import { ProductCountContext } from "./ContextApi/CountContext";

export const App = () => {
  const [productCount, setProductCount] = useState(1);
  return (
    <>
      <ProductCountContext value={{ productCount, setProductCount }}>
        <Card />
        <Cart />
      </ProductCountContext>
    </>
  );
};
