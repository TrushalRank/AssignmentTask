import { all } from "redux-saga/effects";
import { productWatcher } from "./Home";

export default function* root() {
	yield all([productWatcher()]);
}
