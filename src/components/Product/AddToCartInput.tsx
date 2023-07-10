import { useContext, useState } from "react";
import { Button } from "../Button";
import { cartContext } from "../../context/CartContext";

export const AddToCartInput = () => {
  const { addItem } = useContext(cartContext);
  const [quantity, setQuantity] = useState(0);

  const handleIncreaseQuantity = () => setQuantity(quantity + 1);

  const handleDecreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleQuantityInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const parsedValue = parseInt(value);
    if (parsedValue >= 0) setQuantity(parsedValue);
  };

  const handleAddToCart = () => {
    if (quantity === 0) return;

    const item = {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      price: 125,
      quantity,
    };

    addItem(item);
    setQuantity(0);
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="relative">
        <button
          className="absolute grid h-full transform -translate-y-1/2 top-1/2 left-1 aspect-square place-content-center"
          onClick={handleDecreaseQuantity}
        >
          <img
            src="/icons/icon-minus.svg"
            width={12}
            height={4}
            alt="Decrease quantity"
          />
        </button>
        <input
          value={quantity}
          onChange={handleQuantityInputChange}
          type="number"
          min={0}
          className="w-full p-4 font-bold text-center rounded-lg shadow-sm bg-blue-light-grayish"
          aria-label="Product quantity"
        />
        <button
          className="absolute grid h-full transform -translate-y-1/2 top-1/2 right-1 aspect-square place-content-center"
          onClick={handleIncreaseQuantity}
        >
          <img
            src="/icons/icon-plus.svg"
            width={12}
            height={12}
            alt="Increase quantity"
          />
        </button>
      </div>
      <Button
        label="Add to cart"
        onClick={handleAddToCart}
        iconAlt="Cart icon"
        iconPath="/icons/icon-cart-light.svg"
      />
    </div>
  );
};
