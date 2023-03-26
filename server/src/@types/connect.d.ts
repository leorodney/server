// declare a module named 'connect' with a default export of the above
interface
declare module 'connect' {
    const connect: {
        (path: string): Promise<boolean>;
        sync(path: string): boolean;
    };
    export = connect;
}
