import storeImage from "../../assets/store-image.jpeg";
import "./styles.scss";

export const Partners = () => {
  return (
    <section className="partners-section flex justify-between">
      <div className="partners-section__card">
        <img
          className="partners-section__img"
          src={storeImage}
          alt="store image"
        />
        <div className="partners-section__overlay"></div>
        <div className="partners-section__content">
          <h1 className="partners-section__title">Parceiros</h1>
          <p className="partners-section__subtitle">
            Lorem ipsum dolor sit <br />
            amet, consectetur
          </p>
          <button className="button partners-section__button">CONFIRA</button>
        </div>
      </div>
      <div className="partners-section__card">
        <img
          className="partners-section__img"
          src={storeImage}
          alt="store image"
        />
        <div className="partners-section__overlay"></div>
        <div className="partners-section__content">
          <h1 className="partners-section__title">Parceiros</h1>
          <p className="partners-section__subtitle">
            Lorem ipsum dolor sit <br />
            amet, consectetur
          </p>
          <button className="button partners-section__button">CONFIRA</button>
        </div>
      </div>
    </section>
  );
};
