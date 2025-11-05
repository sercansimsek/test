import { useContext } from "react";
import { ProductCountContext } from "../ContextApi/CountContext";

export const Card = () => {
    const count = useContext(ProductCountContext);

    const { productCount, setProductCount } = count;
  const handleIncrement = () => {
    setProductCount(prev => prev + 1)
  };

  const handleDecrement = () => {
    setProductCount(prev => prev - 1)
  };

  console.log(count);
  
  return (
    <div className="flex flex-col w-max gap-2">
      <button
        onClick={handleIncrement}
        className="cursor-pointer border rounded-2xl p-2"
      >
        Increment +
      </button>
      <button
        onClick={handleDecrement}
        className="cursor-pointer border rounded-2xl p-2"
      >
        Decrement -
      </button>

      <span>{productCount}</span>
    </div>
  );
};
