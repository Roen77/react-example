import { Product } from "../types/products";
import ProductItem from "./ProductItem";

type Props = {
  productList: Product[];
};

function ProductList({ productList }: Props) {
  return (
    <div className="products relative">
      {productList.map((product) => (
        <ProductItem key={product.id} item={product} />
      ))}
    </div>
  );
}

export default ProductList;
