// setup the production slice of the store
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductionState, Status } from "../interfaces/production";

// define the initial state
const initialState : ProductionState = {
    visibility: false,
    status:{
        generating: false,
        publishing: false,
        prompting: false,
        fetching: false,
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
        setVisibility: (state, action: PayloadAction<boolean>) => { state.visibility = action.payload },
        setStatus: (state, action: PayloadAction<Status>) => {
            // loop over all the keys in the status object and set the value to the value in the action payload or false
            for (let key in state.status){
                state.status[key] = action.payload[key] || false;
            }
        },
        setPrompt: (state, action: PayloadAction<ProductionState["prompt"]>) => {
            state.prompt = action.payload;
        }
    }
});

// export the actions and reducer
export const { setVisibility, setStatus, setPrompt } = productionReducer.actions;
export default productionReducer.reducer;