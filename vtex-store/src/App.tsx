import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { CategoriesCards } from "./components/CategoriesCards";
import { Carousel } from "./components/Carousel";
import { Partners } from "./components/Partners";
import { Related } from "./components/Related";
import { Brands } from "./components/Brands";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CategoriesCards />
      <Carousel />
      <Partners />
      <Related />
      <Brands />
    </>
  );
}

export default App;
