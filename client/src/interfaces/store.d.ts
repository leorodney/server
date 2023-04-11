import { AnyAction, Reducer } from "redux";
import { Prompts } from "./prompt";
import { AuthUser } from "./user";
import { Prompt } from "./prompt";

/** 
 * declare interface  for store redux reducers
 * @interface StoreReducers
 * @property {Reducer<AuthUser, AnyAction>} user - user reducer
 * @property {Reducer<Prompt[], AnyAction>} prompts - prompts reducer
 * @example
 * const store = createStore(combineReducers<StoreReducers>({
 *    user: authReducer,
 *   prompts: promptsReducer
 * }));
 * 
 * */

export interface StoreReducers {
    user: Reducer<AuthUser, AnyAction>;
    prompts: Reducer<Prompt[], AnyAction>;
}

/**
 * declare interface for store redux state
 * @interface StoreState
 * @property {AuthUser} user - user state
 * @property {Prompt[]} prompts - prompts state
 * @example
 * const store = createStore(combineReducers<StoreReducers>({
 *   user: authReducer,
 *  prompts: promptsReducer
 * }));
 */

export interface StoreState {
    user: AuthUser;
    prompts: Prompt[];
}