import { MutationFunction, QueryFunction } from "@tanstack/react-query";
import request from ".";
import { Product } from "../types/products";

type productsApiFetchers = {
  getAll: QueryFunction<Product[]>;
  getProduct: QueryFunction<Product[]>;
  updateProductTitle: MutationFunction<boolean, { id: number; title: string }>;
};

export const productsApi: productsApiFetchers = {
  getAll: async ({ pageParam = 1 }) => {
    const res = await request.get(`products?_page=${pageParam}&_limit=5`);
    return res.data;
  },
  getProduct: async ({ queryKey }) => {
    const [, id] = queryKey;

    const res = await request.get(`products?id=${id}`);
    return res.data;
  },
  updateProductTitle: async (payload) => {
    const { id, title } = payload;
    const res = await request.put(`products/${id}`, { title });
    return res.data;
  },
};

// saga에서 사용
export const getProductsAllRequest = async () => {
  const res = await request.get("products");
  return res.data;
};
