import "./styles.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import heroPictures from "./components/heroPictures";
import topSelling from "./components/topSelling";
import ProductDisplay from "./components/ProductDisplay";
import Consoles from "./components/otherProducts";
import Footer from "./components/Footer";

export default function App() {
  let topProducts = topSelling.map((product) => {
    return <ProductDisplay id={product.id} {...product} />;
  });

  let consoles = Consoles.map((console) => {
    return <ProductDisplay id={console.id} {...console} />;
  });

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="hero">
        <Hero {...heroPictures[0]} />
      </div>
      <div className="main-page">
        <div className="row">
          {topProducts[0]}
          {topProducts[1]}
        </div>
        <div className="row">
          {topProducts[2]}
          {topProducts[3]}
        </div>
      </div>
      <div className="hero2">
        <Hero {...heroPictures[1]} />
      </div>
      <div className="console-page">{consoles}</div>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}
