import { useContext } from "react";
import { ProductCountContext } from "../ContextApi/CountContext";
import { DataContext } from "../ContextApi/DataContext";

export const Card = () => {
  const count = useContext(ProductCountContext);
  const datas = useContext(DataContext);

  const { data, setData } = datas;
  const { productCount, setProductCount } = count;

  const handleIncrement = () => {
    setProductCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setProductCount((prev) => prev - 1);
  };

  const addItem = () => {
    const newItem = {
      id: 4,
      name: "Kimball",
      surname: "Cho",
      age: 29,
    };

    setData([...data, newItem]);
  };

  const deleteItem = (id) => {
    setData((data) => data.filter((el) => el.id !== id));
  };

  /* console.log(count);
  console.log(data); */

  return (
    <div className="flex flex-col w-max gap-2">
      <ul className="flex flex-col gap-2">
        {data.map((el) => (
          <li key={el.id}>
            <div className="flex flex-col gap-1 border rounded-lg items-center">
              <span>{el.name}</span>
              <span>{el.surname}</span>
              <span>{el.age}</span>
              <button
                type="button"
                className="border rounded-lg p-2 cursor-pointer"
                onClick={() => deleteItem(el.id)}
              >
                Remove Item
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="border rounded-lg p-2 cursor-pointer"
        onClick={addItem}
      >
        Add Item
      </button>
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
