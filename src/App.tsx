import { Carousel } from "./components/Carousel/Carousel";
import { Price } from "./components/Product/Price";
import { Container } from "./components/layout/Container";
import { AddToCartInput } from "./components/Product/AddToCartInput";
import { useState } from "react";
import { ProductImagesModal } from "./components/Product/ProductImagesModal";
import { CarouselContextProvider } from "./context/CarouselContext";

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModalVisibility = () => setIsModalOpen(!isModalOpen);

  return (
    <CarouselContextProvider>
      <main>
        <Container>
          <section className="grid md:grid-cols-2 md:px-8 md:py-16 md:gap-20">
            <Carousel mainImageCallback={toggleModalVisibility} />
            {/* Sneakers information */}
            <div className="flex flex-col justify-center gap-4 p-6 md:gap-8 animate-fade-up md:animate-fade-left">
              <h2 className="text-sm font-bold tracking-widest uppercase text-orange-normal">
                Sneaker company
              </h2>
              <h1 className="text-3xl font-bold capitalize md:text-4xl">
                Fall limited edition sneakers
              </h1>
              <p className="font-medium leading-relaxed text-blue-dark-grayish">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
              </p>
              <Price price={250} discount={50} />
              {/* Input controls */}
              <AddToCartInput />
            </div>
          </section>
        </Container>
        {isModalOpen && (
          <ProductImagesModal toggleModalVisibility={toggleModalVisibility} />
        )}
      </main>
    </CarouselContextProvider>
  );
};
