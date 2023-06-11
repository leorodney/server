// declare module for src folder tjat 
declare module 'src' {
    const src: {
        (path: string): Promise<boolean>;
        sync(path: string): boolean;
    };
    export = src;
}
