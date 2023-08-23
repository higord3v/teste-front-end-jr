import "./styles.scss";
import storePicture from "../../assets/store-picture.png";

export const Banner = () => {
  return (
    <section className="banner-section">
      <img
        className="banner-section__img"
        src={storePicture}
        alt="store picture"
      />
      <div className="banner-section__overlay"></div>
      <div className="banner-section__content">
        <h1 className="banner-section__title">
          Venha conhecer nossas <br />
          promoções
        </h1>
        <h2 className="banner-section__subtitle">50% Off nos produtos</h2>
        <button className="button banner-section__button">Ver Produto</button>
      </div>
    </section>
  );
};
