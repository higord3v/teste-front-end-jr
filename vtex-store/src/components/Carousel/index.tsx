import { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";
import previous from "../../assets/previous.svg";
import next from "../../assets/next.svg";
import { formatter } from "../../util/formatter";
import { IProduct } from "../../interfaces/IProduct";
import { prouctCategories } from "../../data/productCategories";
import { Modal } from "../Modal";

export const Carousel = () => {
  const [visibleProducts, setVisibleProducts] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IProduct | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
      );
      setProducts(data.products);
      setVisibleProducts(data.products.slice(0, 4));
      setPage(0);
    })();
  }, []);

  return (
    <section className="carousel flex-column">
      <div className="carousel__title">
        <h2 className="flex">Produtos Relacionados</h2>
      </div>
      <div className="carousel__product-category flex">
        {prouctCategories.map((category) => (
          <button key={category.key}>{category.name}</button>
        ))}
      </div>
      <div className="carousel__items flex">
        <button
          onClick={() => {
            let previousPage = page - 1;
            if (page === 0) {
              previousPage = products.length - 4;
            }
            setPage(previousPage);
            setVisibleProducts(
              [...products].slice(previousPage, previousPage + 4)
            );
          }}
          className="carousel__previous-button"
        >
          <img src={previous} alt="previous" />
        </button>
        {visibleProducts.map((product) => (
          <div key={product.productName} className="carousel__item flex-column">
            <img
              onClick={() => {
                setModal(true);
                setSelectedItem(product);
              }}
              src={product.photo}
              alt={product.productName}
            />
            <p className="carousel__product-name">{product.productName}</p>
            <p className="carousel__previous-price">
              {formatter(product.price + 1000)}
            </p>
            <p className="carousel__product-price">
              {formatter(product.price)}
            </p>
            <span>ou 10x de {formatter(product.price / 100)} sem juros</span>
            <strong className="primary-color">Frete grátis</strong>
            <button
              className="button"
              type="button"
              onClick={() => {
                setModal(true);
                setSelectedItem(product);
              }}
            >
              COMPRAR
            </button>
          </div>
        ))}
        <button
          className="carousel__next-button"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage + 3 === products.length) {
              nextPage = 0;
            }

            setPage(nextPage);
            setVisibleProducts([...products].slice(nextPage, nextPage + 4));
          }}
        >
          <img src={next} alt="next" />
        </button>
      </div>
      <Modal modal={modal} selectedItem={selectedItem} setModal={setModal} />
    </section>
  );
};
