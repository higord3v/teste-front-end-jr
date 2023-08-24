import "./styles.scss";
export const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1 className="newsletter__title">Cadastre-se e Receba Nossas</h1>
      <h2 className="newsletter__subtitle">novidades e promoções</h2>
      <p className="newsletter__p">
        Excepteur sint occaecat cudatat non ent, sunt in <br /> culpa qui
        officia lorem ipsum
      </p>
      <div className="newsletter__form flex">
        <input
          className="newsletter__input"
          type="text"
          placeholder="SEU E-MAIL"
        />
        <button className="button newsletter__button">OK</button>
      </div>
    </div>
  );
};
