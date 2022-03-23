import { takeLatest, put } from "redux-saga/effects";
import { ADD_PRODUCTS_WATCHER, DELETE_PRODUCTS_WATCHER, GET_ALL_PRODUCTS_WATCHER, GET_CATEGORY_WATCHER, GET_PRODUCTS_WATCHER } from "../../constant";
import { addProductsError, addProductsSuccess, deleteProductsError, deleteProductsSuccess, getAllProductsError, getAllProductsSuccess, getCategoryError, getCategorySuccess, getProductsError, getProductsSuccess } from "../../actions";
import { API_URL, BASE_URL } from "../../services";

function* onGetCategories(categoriesAction: any) {
	let { payload, resolve, reject } = categoriesAction;
	try {
		const header = { "Content-Type": "application/json" };
		const response = yield fetch(BASE_URL + API_URL.GET_CATEGORY, {
			method: "GET",
			headers: header,
			body: ""
		}).then((res: any) => resolve(res.json()));
		yield put(getCategorySuccess(response));
	} catch (e) {
		yield put(getCategoryError(e));
		reject(e);
	}
}

function* onGetAllProducts(categoriesAction: any) {
	let { payload, resolve, reject } = categoriesAction;
	try {
		const header = { "Content-Type": "application/json" };
		const response = yield fetch(BASE_URL + API_URL.GET_ALL_PRODUCTS, {
			method: "GET",
			headers: header,
			body: ""
		}).then((res: any) => resolve(res.json()));
		yield put(getAllProductsSuccess(response));
	} catch (e) {
		yield put(getAllProductsError(e));
		reject(e);
	}
}

function* onGetProducts(categoriesAction: any) {
	let { payload, resolve, reject } = categoriesAction;
	try {
		const header = { "Content-Type": "application/json" };
		const response = yield fetch(BASE_URL + API_URL.GET_ALL_PRODUCTS + `${payload.id}`, {
			method: "GET",
			headers: header,
			body: ""
		}).then((res: any) => resolve(res.json()));
		yield put(getProductsSuccess(response));
	} catch (e) {
		yield put(getProductsError(e));
		reject(e);
	}
}

function* onDeleteProduct(categoriesAction: any) {
	let { payload, resolve, reject } = categoriesAction;
	try {
		const header = { "Content-Type": "application/json" };
		const response = yield fetch(BASE_URL + API_URL.GET_ALL_PRODUCTS + `${payload.id}`, {
			method: "DELETE",
			headers: header,
			body: ""
		}).then((res: any) => resolve(res.json()));
		yield put(deleteProductsSuccess(response));
	} catch (e) {
		yield put(deleteProductsError(e));
		reject(e);
	}
}

function* onAddProduct(categoriesAction: any) {
	let { payload, resolve, reject } = categoriesAction;
	try {
		const header = { "Content-Type": "application/json" };
		const response = yield fetch(BASE_URL + API_URL.GET_ALL_PRODUCTS, {
			method: "POST",
			headers: header,
			body: JSON.stringify(payload)
		}).then((res: any) => resolve(res.json()));
		yield put(addProductsSuccess(response));
	} catch (e) {
		yield put(addProductsError(e));
		reject(e);
	}
}

export function* productWatcher() {
	yield takeLatest(GET_CATEGORY_WATCHER, onGetCategories);
	yield takeLatest(GET_ALL_PRODUCTS_WATCHER, onGetAllProducts);
	yield takeLatest(GET_PRODUCTS_WATCHER, onGetProducts);
	yield takeLatest(DELETE_PRODUCTS_WATCHER, onDeleteProduct);
	yield takeLatest(ADD_PRODUCTS_WATCHER, onAddProduct);
}
