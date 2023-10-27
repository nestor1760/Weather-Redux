import { applyMiddleware, combineReducers, createStore } from "redux";
import { weatherReducer } from "./weatherReducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  weather: weatherReducer
})

export const store = createStore(rootReducers, applyMiddleware(thunk))