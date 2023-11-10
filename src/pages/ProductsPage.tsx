import ProductList from "../components/ProductList";
import { useQuery } from "@tanstack/react-query";
import { productKeys } from "../react-query/constants";
import { productsApi } from "../api/products";

function ProductsPage() {
  // const dispatch = useDispatch();
  // const { productList, isError, isLoading } = useSelector(
  //   (state: RootState) => state.products
  // );

  // useEffect(() => {
  //   dispatch(getProductsAll());
  // }, []);

  const {
    isLoading,
    data: productList,
    isError,
  } = useQuery(productKeys.getAll, productsApi.getAll);

  if (isLoading && !productList) {
    return (
      <div>
        <p>로딩중...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>에러 발생</p>
      </div>
    );
  }

  return (
    <div className="min-h-full">
      <h1 className="text-3xl font-bold underline">Products</h1>
      <ProductList productList={productList} />
    </div>
  );
}

export default ProductsPage;
