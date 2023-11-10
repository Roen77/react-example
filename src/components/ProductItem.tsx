import { Product } from "../types/products";

type Props = {
  item: Product;
};

function ProductItem({ item }: Props) {
  return (
    <div className="product-item" key={item.id}>
      <div className="title">{item.title}</div>
      <div className="price">${item.price}</div>
      <div>{item.description}</div>
      <div>{item.image}</div>
    </div>
  );
}

export default ProductItem;
