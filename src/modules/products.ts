import { ActionType, createAsyncAction, createReducer } from "typesafe-actions";
import { Product } from "../types/products";
import { call, put } from "redux-saga/effects";
import { getProductsAllRequest } from "../api/products";
import { AxiosError } from "axios";

export const PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const getProductsAll = (page: number) => ({
  type: PRODUCTS_REQUEST,
  payload: page,
});

export type ProductsState = {
  productList: Product[];
  isInitLoading: boolean;
  isLoading: boolean;
  hasNextPage: boolean;
  isError: boolean;
};

type ProductsSuccessType = {
  data: Product[];
  page: number;
};
// 액션 생성
export const fetchProductsAsync = createAsyncAction(
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE
)<unknown, ProductsSuccessType, AxiosError>();

// 비동기 로직 처리를 위한 사가 작성
export function* loadProductSaga(action: any): Generator {
  const page = action.payload;
  try {
    const res = yield call(getProductsAllRequest, page);
    yield put(
      fetchProductsAsync.success({
        data: res as unknown as Product[],
        page,
      })
    );
  } catch (error) {
    yield put(fetchProductsAsync.failure(error as AxiosError));
  }
}

const actions = { fetchProductsAsync };
export type ProductsAction = ActionType<typeof actions>;

const initialState: ProductsState = {
  productList: [],
  isLoading: false,
  isInitLoading: false,
  hasNextPage: false,
  isError: false,
};

// 리듀서 생성
export const products = createReducer<ProductsState, ProductsAction>(
  initialState,
  {
    [PRODUCTS_REQUEST]: (state, action) => ({
      ...state,
      isLoading: true,
      isInitLoading: action.payload === 1 ? true : false,
    }),
    [PRODUCTS_SUCCESS]: (state, action) => ({
      ...state,
      isInitLoading: false,
      isLoading: false,
      hasNextPage:
        action.payload.data && action.payload.data.length > 0 ? true : false,
      productList:
        action.payload.page === 1
          ? action.payload.data
          : [...state.productList, ...action.payload.data],
    }),
    [PRODUCTS_FAILURE]: (state) => ({
      ...state,
      isLoading: false,
      isInitLoading: false,
      isError: true,
    }),
  }
);
