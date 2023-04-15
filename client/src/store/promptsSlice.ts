// setup the prompts slice of the store
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Prompt, PromptState } from "../interfaces/prompt";

// define the initial state
const initialState : PromptState = {
    prompts: [],
    search: ""
};

// create the slice
const promptsReducer = createSlice({
    name: "prompts",
    initialState,
    reducers: {
        // define the reducers
        addPrompt: (state, action: PayloadAction<Prompt>) => {
            state.prompts.push(action.payload);
        },

        setPrompts: (state, action: PayloadAction<Prompt[]>) => {
            state.prompts = action.payload;
        },

        // get random prompt
        getRandomPrompt: (state: PromptState["prompts"]) => {
            return state[Math.floor(Math.random() * state.length)];
        },

        // set search query
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },

        // search for prompt by author or value
        searchPrompt: (state: PromptState) => {
            return state.prompts.filter(prompt => prompt.author.toLowerCase().includes(state.search) || prompt.value.toLowerCase().includes(state.search));
        }

    }
});

// export the actions and reducer
export const { addPrompt, setPrompts, getRandomPrompt, setSearchQuery, searchPrompt } = promptsReducer.actions;
export default promptsReducer.reducer;