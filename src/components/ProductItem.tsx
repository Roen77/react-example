import { Product } from "../types/products";
import UpdateProductTitle from "./UpdateProductTitle";

type Props = {
  item: Product;
};

function ProductItem({ item }: Props) {
  return (
    <div className="product-item" key={item.id}>
      <div className="title">{item.title}</div>
      <UpdateProductTitle title={item.title} id={item.id} />
      <div className="price">${item.price}</div>
      <div>{item.description}</div>
      <div>{item.image}</div>
    </div>
  );
}

export default ProductItem;
