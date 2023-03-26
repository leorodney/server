// declare a module named 'prompt' with a default export of the above interface
declare module 'prompt' {
    const prompt: {
        (path: string): Promise<boolean>;
        sync(path: string): boolean;
    };
    export = prompt;
};