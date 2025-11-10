import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Cart } from "./components/Cart";
import { ProductCountContext } from "./ContextApi/CountContext";
import { dataFromServer } from "./data/data";
import { DataContext } from "./ContextApi/DataContext";

export const App = () => {
  const [productCount, setProductCount] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataFromServer);
  }, []);
  return (
    <>
      <DataContext value={{ data, setData }}>
        <ProductCountContext value={{ productCount, setProductCount }}>
          <Card />
          <Cart />
        </ProductCountContext>
      </DataContext>
    </>
  );
};
