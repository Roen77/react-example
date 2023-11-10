import React, { useMemo } from "react";
import ProductList from "../components/ProductList";
import { useInfiniteQuery } from "@tanstack/react-query";
import { productKeys } from "../react-query/constants";
import { productsApi } from "../api/products";
import ListMore from "../components/ListMore";
import ListLayout from "../layout/ListLayout";
import Spinner from "../components/Spinner";

function ProductsQueryPage() {
  const {
    isLoading,
    data,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isInitialLoading,
  } = useInfiniteQuery(productKeys.getAll, productsApi.getAll, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage && lastPage.length === 0) {
        return;
      }
      return pages.length + 1;
    },
  });

  const productList = useMemo(() => (data?.pages || []).flat(), [data?.pages]);

  const fetchMoreList = () => {
    if (isInitialLoading || isFetching) return;
    hasNextPage && fetchNextPage();
  };

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
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProductList productList={productList} />
          <ListMore
            fetchMoreList={fetchMoreList}
            isFetchingNextPage={isFetchingNextPage}
          />
        </>
      )}
    </ListLayout>
  );
}

export default ProductsQueryPage;
