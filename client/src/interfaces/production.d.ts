import { Action } from "redux";
import { Prompt } from "./prompt";

export declare interface Status{
    [key: string]: boolean;
}
// declare interface for projection that extends Status:
export declare interface Projection extends Status{
    id?: string,
    img: string,
}

export declare interface ProductionState{
    visibility: boolean = false,
    status: Status,
    prompt: Prompt,
}

// setStatus action type:
export declare interface setStatus extends Action{
    type: string,
    status: Status
}