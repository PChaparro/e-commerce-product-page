/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";

// Initialize the context
export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
}

const initialState = {
  items: [],
  addItem: (_item: CartItem) => {},
  removeItem: (_id: number) => {},
};

export const cartContext = createContext<CartState>(initialState);

// Context logic
interface CartContextProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    const exits = items.find((i) => i.id === item.id);

    if (exits) {
      const updatedCart = items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
      );
      setItems(updatedCart);
    } else {
      setItems([...items, item]);
    }
  };

  const removeItem = (id: number) => {
    const updatedCart = items.filter((i) => i.id !== id);
    setItems(updatedCart);
  };

  return (
    <cartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </cartContext.Provider>
  );
};
