import { Carousel } from "./components/Carousel/Carousel";
import { Container } from "./components/layout/Container";

export const App = () => {
  return (
    <main>
      <Container>
        <section className="grid md:grid-cols-2 md:px-8 md:py-16">
          <Carousel />
        </section>
      </Container>
    </main>
  );
};
