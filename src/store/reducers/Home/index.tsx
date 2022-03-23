import {
	ADD_PRODUCTS_FAILURE,
	ADD_PRODUCTS_SUCCESS,
	ADD_PRODUCTS_WATCHER,
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

const initialState = {
	getCatError: null,
	getCatLoader: false,
	categoryData: [],
	allProductError: null,
	allProductLoader: false,
	allProductData: [],
};

export default function homeReducer(state = initialState, action: any) {
	switch (action.type) {
		case GET_CATEGORY_WATCHER:
			return {
				...state,
				getCatLoader: true
			};
		case GET_CATEGORY_SUCCESS: {
			return {
				...state,
				getCatError: null,
				categoryData: action.payload.payload,
				getCatLoader: false
			};
		}
		case GET_CATEGORY_FAILURE:
			return {
				...state,
				getCatError: action,
				getCatLoader: false
			};
		case GET_ALL_PRODUCTS_WATCHER:
			return {
				...state,
				allProductLoader: true
			};
		case GET_ALL_PRODUCTS_SUCCESS: {
			return {
				...state,
				allProductError: null,
				allProductData: action.payload.payload,
				allProductLoader: false
			};
		}
		case GET_ALL_PRODUCTS_FAILURE:
			return {
				...state,
				allProductError: action,
				allProductLoader: false
			};
		case GET_PRODUCTS_WATCHER:
			return {
				...state
			};
		case GET_PRODUCTS_SUCCESS: {
			return {
				...state
			};
		}
		case GET_PRODUCTS_FAILURE:
			return {
				...state
			};
		case ADD_PRODUCTS_WATCHER:
			return {
				...state
			};
		case ADD_PRODUCTS_SUCCESS: {
			return {
				...state
			};
		}
		case ADD_PRODUCTS_FAILURE:
			return {
				...state
			};
		default:
			return state;
	}
}
