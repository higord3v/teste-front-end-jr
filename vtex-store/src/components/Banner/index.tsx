import "./styles.scss";
import storePicture from "../../assets/store-picture.png";

export const Banner = () => {
  return (
    <section>
      <img className="banner" src={storePicture} alt="store picture" />
      <div className="banner__overlay"></div>
      <div className="banner__content">
        <h1 className="banner__title">
          Venha conhecer nossas <br />
          promoções
        </h1>
        <h2 className="banner__subtitle">50% Off nos produtos</h2>
        <button className="button banner__button">Ver Produto</button>
      </div>
    </section>
  );
};
