import { ActionType, createAsyncAction, createReducer } from "typesafe-actions";
import { Product } from "../types/products";
import { call, put } from "redux-saga/effects";
import { getProducsAll } from "../api/products";
import { AxiosError } from "axios";

export const PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const getProductsAll = () => ({ type: PRODUCTS_REQUEST });

export type ProductsState = {
  productList: Product[];
  isLoading: boolean;
  isError: boolean;
};

// 액션 생성
export const fetchProductsAsync = createAsyncAction(
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE
)<null, Product[], AxiosError>();

// 비동기 로직 처리를 위한 사가 작성
export function* loadProductSaga(): Generator {
  try {
    const res = yield call(getProducsAll);
    yield put(fetchProductsAsync.success(res as unknown as Product[]));
  } catch (error) {
    yield put(fetchProductsAsync.failure(error as AxiosError));
  }
}

const actions = { fetchProductsAsync };
export type ProductsAction = ActionType<typeof actions>;

const initialState: ProductsState = {
  productList: [],
  isLoading: false,
  isError: false,
};

// 리듀서 생성
export const products = createReducer<ProductsState, ProductsAction>(
  initialState,
  {
    [PRODUCTS_REQUEST]: (state) => ({ ...state, isLoading: true }),
    [PRODUCTS_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      productList: action.payload,
    }),
    [PRODUCTS_FAILURE]: (state) => ({
      ...state,
      isLoading: false,
      isError: true,
    }),
  }
);
