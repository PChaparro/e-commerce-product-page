import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { CartContextProvider } from "./context/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartContextProvider>
      <Navbar />
      <App />
    </CartContextProvider>
  </React.StrictMode>
);
