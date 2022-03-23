import {
	ADD_PRODUCTS_FAILURE,
	ADD_PRODUCTS_SUCCESS,
	ADD_PRODUCTS_WATCHER,
	DELETE_PRODUCTS_FAILURE,
	DELETE_PRODUCTS_SUCCESS,
	DELETE_PRODUCTS_WATCHER,
	GET_ALL_PRODUCTS_FAILURE,
	GET_ALL_PRODUCTS_SUCCESS,
	GET_ALL_PRODUCTS_WATCHER,
	GET_CATEGORY_FAILURE,
	GET_CATEGORY_SUCCESS,
	GET_CATEGORY_WATCHER,
	GET_PRODUCTS_FAILURE,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_WATCHER
} from "../../constant";

export function getCategoryWatcher(payload: any, resolve: any, reject: any) {
	return { type: GET_CATEGORY_WATCHER, payload, resolve, reject };
}

export function getCategorySuccess(payload: any) {
	return { type: GET_CATEGORY_SUCCESS, payload: payload };
}

export function getCategoryError(error: any) {
	return { type: GET_CATEGORY_FAILURE, payload: error };
}

export function getAllProductsWatcher(payload: any, resolve: any, reject: any) {
	return { type: GET_ALL_PRODUCTS_WATCHER, payload, resolve, reject };
}

export function getAllProductsSuccess(payload: any) {
	return { type: GET_ALL_PRODUCTS_SUCCESS, payload: payload };
}

export function getAllProductsError(error: any) {
	return { type: GET_ALL_PRODUCTS_FAILURE, payload: error };
}

export function getProductsWatcher(payload: any, resolve: any, reject: any) {
	return { type: GET_PRODUCTS_WATCHER, payload, resolve, reject };
}

export function getProductsSuccess(payload: any) {
	return { type: GET_PRODUCTS_SUCCESS, payload: payload };
}

export function getProductsError(error: any) {
	return { type: GET_PRODUCTS_FAILURE, payload: error };
}

export function deleteProductsWatcher(payload: any, resolve: any, reject: any) {
	return { type: DELETE_PRODUCTS_WATCHER, payload, resolve, reject };
}

export function deleteProductsSuccess(payload: any) {
	return { type: DELETE_PRODUCTS_SUCCESS, payload: payload };
}

export function deleteProductsError(error: any) {
	return { type: DELETE_PRODUCTS_FAILURE, payload: error };
}

export function addProductsWatcher(payload: any, resolve: any, reject: any) {
	return { type: ADD_PRODUCTS_WATCHER, payload, resolve, reject };
}

export function addProductsSuccess(payload: any) {
	return { type: ADD_PRODUCTS_SUCCESS, payload: payload };
}

export function addProductsError(error: any) {
	return { type: ADD_PRODUCTS_FAILURE, payload: error };
}