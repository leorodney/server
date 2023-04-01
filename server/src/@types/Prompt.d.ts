// declare a module named 'prompt' with a default export of the above interface
declare module 'Prompt' {
    const Prompt: {
        (path: string): Promise<boolean>;
        sync(path: string): boolean;
    };
    export = Prompt;
};