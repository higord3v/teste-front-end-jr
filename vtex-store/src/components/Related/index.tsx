import "./styles.scss";
import storeImage from "../../assets/store-image.jpeg";

export const Related = () => {
  return (
    <section className="related-section">
      <div className="related-section__h2">
        <h2 className=" flex">Produtos Relacionados</h2>
      </div>
      <p className="related-section__p">Ver todos</p>
      <div className="related-section__cards flex justify-between">
        <div className="related-section__card">
          <img
            className="related-section__img"
            src={storeImage}
            alt="store image"
          />
          <div className="related-section__overlay"></div>
          <div className="related-section__content">
            <h1 className="related-section__title">Produtos</h1>
            <p className="related-section__subtitle">
              Lorem ipsum dolor sit <br />
              amet, consectetur
            </p>
            <button className="button related-section__button">CONFIRA</button>
          </div>
        </div>
        <div className="related-section__card">
          <img
            className="related-section__img"
            src={storeImage}
            alt="store image"
          />
          <div className="related-section__overlay"></div>
          <div className="related-section__content">
            <h1 className="related-section__title">Parceiros</h1>
            <p className="related-section__subtitle">
              Lorem ipsum dolor sit <br />
              amet, consectetur
            </p>
            <button className="button related-section__button">CONFIRA</button>
          </div>
        </div>
      </div>
    </section>
  );
};
