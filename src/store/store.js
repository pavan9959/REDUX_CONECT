import { createStore, applyMiddleware } from "redux";
import counterReducer from "../reducers/counter";
import thunk from "redux-thunk";

const store = createStore(counterReducer, applyMiddleware(thunk));

export default store;
