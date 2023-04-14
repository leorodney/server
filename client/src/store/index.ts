// configure redux store using configureStore from redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./authSlice";
import promptsReducer from "./promptsSlice";
import productionReducer from "./productionSlice";
import { StoreReducers } from "../interfaces/store";

const rootReducer = combineReducers({
    user: authReducer,
    prompts: promptsReducer,
    production: productionReducer
} satisfies StoreReducers );

const store = configureStore({
    reducer: rootReducer,
});

export default store;