export const formatter = (price: number | undefined) => {
  if (!price) return;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};
