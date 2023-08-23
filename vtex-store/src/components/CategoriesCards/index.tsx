import "./styles.scss";
import tech from "../../assets/tech.svg";
import supermarket from "../../assets/supermarket.svg";
import drinks from "../../assets/drinks.svg";
import tools from "../../assets/tools.svg";
import health from "../../assets/health.svg";
import sports from "../../assets/sports.svg";
import fashion from "../../assets/fashion.svg";

const categories = [
  {
    name: "Tecnologia",
    image: tech,
  },
  {
    name: "Supermercado",
    image: supermarket,
  },
  {
    name: "Bebidas",
    image: drinks,
  },
  {
    name: "Ferramentas",
    image: tools,
  },
  {
    name: "Saúde",
    image: health,
  },
  {
    name: "Esportes",
    image: sports,
  },
  {
    name: "Moda",
    image: fashion,
  },
];
export const CategoriesCards = () => {
  return (
    <section>
      <div className="categories flex justify-between">
        {categories.map((category) => (
          <div className="categories__item flex-column align-center">
            <div
              className="categories__card flex-column align-center"
              key={category.name}
            >
              <img src={category.image} alt={category.name} />
            </div>
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
