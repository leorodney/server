export interface Prompt{
    id?: string,
    img: string,
    author: string,
    value:string,
    downloads?:number = 0,
    likes?:number = 0,
}

// redux prompt actions types:
export interface PromptAction{
    type: string,
    prompt?: Prompt
    prompts?: Prompt[],
}

// redux prompts state type:
export interface Prompts{
    prompts:  Prompt[] 
};

// redux prompt state type:
export interface PromptState extends Prompts{
    search: string,
}
    
