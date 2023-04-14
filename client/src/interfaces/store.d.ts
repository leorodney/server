import { AnyAction, Reducer } from "redux";
import { PayloadAction } from "@reduxjs/toolkit";
import { PromptState, Prompts } from "./prompt";
import { AuthUser } from "./user";
import { Prompt } from "./prompt";
import { ProductionState } from "./production";
import { setPrompt, setStatus } from "../store/productionSlice";


/** 
 * declare interface  for store redux reducers
 * @interface StoreReducers
 * @property {Reducer<AuthUser, AnyAction>} user - user reducer
 * @property {Reducer<PromptState, AnyAction>} prompts - prompts reducer
 * @property {Reducer<ProductionState, PayloadAction<ProductionState["status"]> | PayloadAction<ProductionState["prompt"]>>} production - production reducer
 * @example
 * const store = createStore(combineReducers<StoreReducers>({
 *    user: authReducer,
 *    prompts: promptsReducer,
 *    production: productionReducer
 * }));
 * 
 * */

export interface StoreReducers {
    user: Reducer<AuthUser, AnyAction>;
    prompts: Reducer<PromptState, AnyAction>;
    production: Reducer<ProductionState, PayloadAction<ProductionState["status"]> | PayloadAction<ProductionState["prompt"]>>;
}

/**
 * declare interface for store redux state
 * @interface StoreState
 * @property {AuthUser} `user` - user state
 * @property {PromptState} `prompts` - prompts state
 * @property {ProductionState} `production` - production state
 * @example
 * const store = createStore(combineReducers({
 *   user: authReducer,
 *   prompts: promptsReducer,
 *   production: productionReducer
 * } satisfies StoreReducers)));
 */

export interface StoreState {
    user: AuthUser;
    prompts: PromptState;
    production: ProductionState;
}