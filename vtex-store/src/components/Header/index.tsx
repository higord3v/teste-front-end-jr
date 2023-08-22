import "./styles.scss";
import vtexLogo from "../../assets/vtex-logo.svg";
import truck from "../../assets/truck.svg";
import creditCard from "../../assets/credit-card.svg";
import heart from "../../assets/heart.svg";
import orders from "../../assets/orders.svg";
import shieldCheck from "../../assets/shield-check.svg";
import userCircle from "../../assets/user-circle.svg";
import shoppingCart from "../../assets/shopping-cart.svg";
import magnifyingGlass from "../../assets/MagnifyingGlass.svg";
import crown from "../../assets/crown.svg";

export const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="header__top flex justify-between">
          <div className="flex justify-center">
            <img
              className="header__shield-check"
              src={shieldCheck}
              alt="shield check"
            />
            <span>
              Compra <strong className="primary-color">100% segura</strong>
            </span>
          </div>
          <div className="flex justify-center">
            <img
              className="header__shield-check"
              src={truck}
              alt="shield check"
            />
            <span>
              <strong className="primary-color">Frete grátis</strong> acima de
              R$ 200
            </span>
          </div>
          <div className="flex justify-center">
            <img
              className="header__shield-check"
              src={creditCard}
              alt="shield check"
            />
            <span>
              <strong className="primary-color">Parcele </strong>suas compras
            </span>
          </div>
        </div>
        <div className="header__main flex aling-center justify-between">
          <img className="header__logo" src={vtexLogo} alt="vtex logo" />
          <div className="header__input">
            <input type="text" placeholder="O que você está buscando?" />
            <img src={magnifyingGlass} alt="magnifying glass" />
          </div>
          <div className="header__menu flex justify-between align-center">
            <img src={orders} alt="orders" />
            <img src={heart} alt="heart" />
            <img src={userCircle} alt="user circle" />
            <img src={shoppingCart} alt="shopping cart" />
          </div>
        </div>
        <div className="header__categories flex justify-between">
          <span>TODAS CATEGORIAS</span>
          <span>SUPERMERCADO</span>
          <span>LIVROS</span>
          <span>MODA</span>
          <span>LANÇAMENTOS</span>
          <span className="primary-color">OFERTAS DO DIA</span>
          <div className="flex">
            <img src={crown} alt="crown" />
            <span>ASSINATURA</span>
          </div>
        </div>
      </header>
    </div>
  );
};
