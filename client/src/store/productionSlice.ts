// production slice
// Compare this snippet from client/src/store/productionSlice.ts:
// // setup the production slice of the store
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductionState } from "../interfaces/production";
// import { ProductionState } from "../interfaces/production";

// define the initial state
const initialState : ProductionState = {
    status:{
        generating: false,
        publishing: false
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
            state.status = action.payload;
        },
        setPrompt: (state, action: PayloadAction<ProductionState["prompt"]>) => {
            state.prompt = action.payload;
        }
    }
});

// export the actions and reducer
export const { setStatus, setPrompt } = productionReducer.actions;
export default productionReducer.reducer;