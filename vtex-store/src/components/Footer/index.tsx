import "./styles.scss";
import econverse from "./../../assets/econverse.svg";
import facebook from "./../../assets/facebook.svg";
import instagram from "./../../assets/instagram.svg";
import youtube from "./../../assets/youtube.svg";
import payment from "./../../assets/payment.svg";
import { Newsletter } from "../Newsletter";
export const Footer = () => {
  return (
    <footer className="footer flex-column">
      <div className="footer__top flex">
        <div className="footer__about-us">
          <div>
            <h2 className="footer__links">Sobre nós</h2>
            <p>Conheça</p>
            <p>COMO COMPRAR</p>
            <p>INDICAÇÃO E DESCONTO</p>
          </div>
          <div className="footer__media flex justify-between">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={youtube} alt="youtube" />
          </div>
        </div>
        <div className="footer__information">
          <h2 className="footer__links">INFORMAÇÕES ÚTEIS</h2>
          <p>FALE CONOSCO</p>
          <p>DÚVIDAS</p>
          <p>FORMAS DE PAGAMENTO</p>
          <p>POLÍTICA DE PRIVACIDADE</p>
          <p>TROCAS E DEVOLUÇÕES</p>
        </div>
        <div className="footer__payment">
          <h2 className="footer__links">FORMAS DE PAGAMENTO</h2>
          <img src={payment} alt="econverse" />
        </div>
        <Newsletter />
      </div>

      <div className="footer__bottom flex justify-between">
        <span className="footer__copyright">
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. <br /> É vedada
          a reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </span>
        <img src={econverse} alt="econverse logo" />
      </div>
    </footer>
  );
};
