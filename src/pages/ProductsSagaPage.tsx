import { useCallback, useEffect, useState } from "react";
import { RootState } from "../modules";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAll } from "../modules/products";
import ProductList from "../components/ProductList";
import ListMore from "../components/ListMore";
import ListLayout from "../layout/ListLayout";
import Spinner from "../components/Spinner";

function ProductsSagaPage() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { productList, isError, isLoading, isInitLoading, hasNextPage } =
    useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProductsAll(page));
  }, [dispatch, page]);

  const fetchMoreList = useCallback(() => {
    if (isLoading || !hasNextPage) return;
    setPage((prev) => prev + 1);
  }, [hasNextPage, isLoading]);

  if (isError) {
    return (
      <div>
        <p>에러 발생</p>
      </div>
    );
  }

  return (
    <ListLayout>
      <h1 className="text-3xl font-bold underline">Products</h1>
      {isInitLoading ? (
        <Spinner />
      ) : (
        <>
          <ProductList productList={productList} />
          <ListMore
            fetchMoreList={fetchMoreList}
            isFetchingNextPage={isLoading}
          />
        </>
      )}
    </ListLayout>
  );
}

export default ProductsSagaPage;
