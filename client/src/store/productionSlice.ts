// setup the production slice of the store
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductionState } from "../interfaces/production";

// define the initial state
const initialState : ProductionState = {
    status:{
        generating: false,
        publishing: false,
        visibility: false,
    },
    prompt: {
        author: "",
        value: "",
        img: ""
    }
};

// create the slice
const productionReducer = createSlice({
    name: "production",
    initialState,
    reducers: {
        // define the reducers
        setStatus: (state, action: PayloadAction<ProductionState["status"]>) => {
            state.status.generating = action.payload.generating || false;
            state.status.publishing = action.payload.publishing || false;
            state.status.visibility = action.payload.visibility || false;
        },
        setPrompt: (state, action: PayloadAction<ProductionState["prompt"]>) => {
            state.prompt = action.payload;
        }
    }
});

// export the actions and reducer
export const { setStatus, setPrompt } = productionReducer.actions;
export default productionReducer.reducer;