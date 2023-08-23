import { formatter } from "../../util/formatter";
import { IProduct } from "../../interfaces/IProduct";
import close from "../../assets/close.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";

import "./styles.scss";
import { useEffect, useState } from "react";

export const Modal: React.FC<{
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: IProduct;
}> = ({ modal, setModal, selectedItem }) => {
  const [itemsCount, setItemsCount] = useState(1);

  useEffect(() => {
    setItemsCount(1);
  }, [modal]);
  return (
    <div
      className="modal flex"
      style={{ display: modal ? "flex" : "none" }}
      onClick={() => {
        setModal(false);
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal__content flex-column"
      >
        <img src={close} alt="close" onClick={() => setModal(false)} />
        <div className="flex">
          <div className="modal__photo">
            <img src={selectedItem?.photo} alt={selectedItem?.productName} />
          </div>
          <div className="modal__info">
            <p>{selectedItem?.productName}</p>
            <p className="modal__price">{formatter(selectedItem?.price)}</p>
            <p className="modal__description">
              Many desktop publishing packages and web page editors <br />
              now many desktop publishing
            </p>
            <a href="#">Veja mais detalhes do produto &gt;</a>
            <div className="flex justify-between">
              <button
                className="modal__decrement flex align-items justify-center"
                onClick={() =>
                  setItemsCount(() => {
                    if (itemsCount === 1) return 1;
                    return itemsCount - 1;
                  })
                }
              >
                <img src={minus} alt="decrement" />
              </button>
              <span>{itemsCount}</span>
              <button
                className="modal__increment flex align-items justify-center"
                onClick={() => setItemsCount(itemsCount + 1)}
              >
                <img src={plus} alt="increment" />
              </button>
            </div>
            <button className="button">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};
