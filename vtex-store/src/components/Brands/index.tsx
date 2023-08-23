import "./styles.scss";
import logo from "./../../assets/vtex-logo.svg";
import arrow from "./../../assets/arrow.svg";
const cards = () => [1, 2, 3, 4, 5];

export const Brands = () => {
  return (
    <section className="brands-section">
      <div className="brands-section__h2 flex justify-center">
        <h2>Navegue pelas Marcas</h2>
      </div>
      <div className="brands-section__cards flex justify-between">
        {cards().map((card) => (
          <div
            className="brands-section__card flex justify-center align-center"
            key={card}
          >
            <img className="brands-section__img" src={logo} alt="vtex logo" />
          </div>
        ))}
        <img className="brands-section__forward" src={arrow} alt="forward" />
      </div>
    </section>
  );
};
