import { all, takeLatest } from "redux-saga/effects";
import { fetchProductsAsync, loadProductSaga } from "./products";

export default function* mainSaga() {
  yield all([takeLatest(fetchProductsAsync.request, loadProductSaga)]);
}
