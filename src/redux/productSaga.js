import { takeEvery, put } from "redux-saga/effects";
// import { searchProduct } from "./action";
import { PRODUCT_LIST } from "./constant";
import { SET_PRODUCT_LIST } from "./constant";
import { SEARCH_PRODUCTS } from "./constant";

function* getProducts() {
  console.log("call api here");
  let data = yield fetch("http://localhost:3001/products");
  data = yield data.json();
  // console.log("Brought you the json data : ", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* getSearch(query) {
  console.log("call api here");
  let data = yield fetch(`http://localhost:3001/products?q=${query.data}`);
  data = yield data.json();
  console.log("Brought you the json data : ", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCTS, getSearch);
}

export default productSaga;
