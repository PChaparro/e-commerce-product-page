import { CartItem } from "../../context/CartContext";
import { getFormattedPrice } from "../../utils/functions";

interface CartProductRowProps {
  item: CartItem;
}

export const CartProductRow = ({ item }: CartProductRowProps) => {
  return (
    <li
      key={`cart-item-${item.id}`}
      className="flex items-center justify-between gap-4"
    >
      <img
        src={`/images/image-product-${item.id}-thumbnail.jpg`}
        className="rounded-md"
        alt={item.name}
        width={52}
      />
      <div className="text-blue-dark-grayish">
        <p>{item.name}</p>
        <p>
          ${getFormattedPrice(item.price)} × {item.quantity}{" "}
          <b className="text-black">
            ${getFormattedPrice(item.price * item.quantity)}
          </b>
        </p>
      </div>
      <img
        src="icons/icon-delete.svg"
        className="cursor-pointer"
        alt="Trash icon"
        width={14}
      />
    </li>
  );
};
