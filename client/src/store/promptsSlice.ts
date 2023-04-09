// setup the prompts slice of the store
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Prompt } from "../interfaces/prompt";

// define the initial state
const initialState : Prompt[] = [];

// create the slice
const promptsReducer = createSlice({
    name: "prompts",
    initialState,
    reducers: {
        // define the reducers
        addPrompt: (state, action: PayloadAction<Prompt>) => {
            state.push(action.payload);
        },

        setPrompts: (state, action: PayloadAction<Prompt[]>) => {
            state = action.payload;
        },

        // get random prompt
        // getRandomPrompt: (state: Prompt[]) => {
        //     return state[Math.floor(Math.random() * state.length)];
        // },

        // search for prompt by author or value
        searchPrompt: (state, action: PayloadAction<string>) => {
            return state.filter(prompt => prompt.author.toLowerCase().includes(action.payload) || prompt.value.toLowerCase().includes(action.payload));
        }

    }
});

// export the actions and reducer
export const { addPrompt, setPrompts, searchPrompt } = promptsReducer.actions;
export default promptsReducer.reducer;