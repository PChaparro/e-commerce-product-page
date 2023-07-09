import { useState } from "react";
import { Carousel } from "./components/Carousel/Carousel";
import { Price } from "./components/Product/Price";
import { Container } from "./components/layout/Container";

export const App = () => {
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

  return (
    <main>
      <Container>
        <section className="grid md:grid-cols-2 md:px-8 md:py-16 md:gap-20">
          <Carousel />
          {/* Sneakers information */}
          <div className="flex flex-col justify-center gap-4 p-6 md:gap-8 animate-fade-up md:animate-fade-left">
            <h2 className="text-sm font-bold tracking-widest uppercase text-orange-normal">
              Sneaker company
            </h2>
            <h1 className="text-3xl font-bold capitalize md:text-4xl">
              Fall limited edition sneakers
            </h1>
            <p className="font-medium leading-relaxed text-blue-dark-grayish">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
            <Price price={250} discount={50} />
            {/* Input controls */}
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
              <button className="flex items-center justify-center w-full gap-4 p-4 font-semibold text-white rounded-lg shadow-xl bg-orange-normal shadow-orange-pale">
                <img
                  src="/icons/icon-cart-light.svg"
                  alt="Cart icon"
                  width={22}
                  height={20}
                />
                Add to cart
              </button>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};
