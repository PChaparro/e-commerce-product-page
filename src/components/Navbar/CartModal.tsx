import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { CartProductRow } from "./CartProductRow";
import { Button } from "../Button";

export const CartModal = () => {
  const { items } = useContext(cartContext);
  console.log(items);

  return (
    <div className="flex flex-col absolute z-10 w-[95%] h-64 -translate-x-1/2 bg-white rounded-xl shadow-lg left-1/2 -bottom-[16.5rem] md:w-96 md:left-auto md:right-0 md:translate-x-0 overflow-y-auto">
      <b className="block p-6 border-b">Cart</b>
      {/* If the cart is empty, center the message in the modal */}
      <div
        className={`p-6 ${
          items.length === 0 ? "grid flex-grow place-content-center" : ""
        }`}
      >
        {items.length === 0 ? (
          <p className="font-black text-blue-dark-grayish">
            Your cart is empty.
          </p>
        ) : (
          <>
            <ul className="grid gap-6 mb-6">
              {items.map((item) => (
                <CartProductRow item={item} />
              ))}
            </ul>
            <Button label="Checkout" />
          </>
        )}
      </div>
    </div>
  );
};
