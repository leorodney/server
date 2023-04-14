// setupe the authSlice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUser } from "../interfaces/user";

// define the initial state
const initialState : AuthUser = {
    isAuthenticated: false,
    username: "",
    uid: "",
};

// create the slice
const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // define the reducers
        login: (state, action: PayloadAction<AuthUser>) => {
            state.isAuthenticated = true;
            state.username = action.payload.username;
            state.uid = action.payload.uid;
        },

        logout: (state) => {
            state.isAuthenticated = false;
            state.username = "";
            state.uid = "";
        }
    }
});

// export the actions and reducer
export const { login, logout } = authReducer.actions;
export default authReducer.reducer;