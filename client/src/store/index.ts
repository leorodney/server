// configure redux store using configureStore from redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./authSlice";
import promptsReducer from "./promptsSlice";

const rootReducer = combineReducers({
    user: authReducer,
    prompts: promptsReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;