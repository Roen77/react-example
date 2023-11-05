import { MutationFunction, QueryFunction } from "@tanstack/react-query";
import request from ".";
import { Product } from "../types/products";

type productsApiFetchers = {
  getAll: QueryFunction<Product[]>;
  updateProductTitle: MutationFunction<boolean, { id: number; title: string }>;
};

export const productsApi: productsApiFetchers = {
  getAll: async () => {
    const res = await request.get("products");
    return res.data;
  },
  updateProductTitle: async (payload) => {
    const { id, title } = payload;
    const res = await request.patch(`products/${id}`, { title });
    return res.data;
  },
};

// saga에서 사용
export const getProducsAll = async () => {
  const res = await request.get("products");
  return res.data;
};
