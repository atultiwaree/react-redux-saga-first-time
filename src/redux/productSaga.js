import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST } from "./constant";
import { SET_PRODUCT_LIST } from "./constant";
function* getProducts() {
  console.log("call api here");
  let data = yield fetch("http://localhost:3001/products");
  data = yield data.json();
  // console.log("Brought you the json data : ", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
