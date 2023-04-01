// desclare a module named 'User' with a default export of the above interface
declare module 'User' {
    const User: {
        (path: string): Promise<boolean>;
        sync(path: string): boolean;
    };
    export = User;
};