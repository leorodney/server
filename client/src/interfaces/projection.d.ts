export declare interface Status{
    generating?: boolean = false;
    publishing?: boolean = false;
}
// declare interface for projection that extends Status:
export declare interface Projection extends Status{
    id?: string,
    img: string,
}