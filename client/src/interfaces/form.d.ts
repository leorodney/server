import React, { FormEventHandler } from "react";

export interface Form {
    title: string;
    fields: Field[];
    onSubmit: Submit;
    authData: AuthPatcher;
    errors: string[];
};

export interface Field {
    name: string;
    type: string;
    label: string;
    icon: string;
    placeholder: string;
}

export interface Swap{
    title: string;
    fields: Field[];
    swap?: boolean = false;
}

export type Submit = (e) => FormEventHandler<HTMLFormElement> | Promise<void>;

export type AuthData = Login | Register;
export type AuthPatcher = LoginPatcher | RegisterPatcher;

export type LoginPatcher = [Login, React.Dispatch<React.SetStateAction<Login>>];
export type RegisterPatcher = [Register, React.Dispatch<React.SetStateAction<Register>>];

export type Login = {
    emailorusername: string;
    password: string;
}

export type Register = {
    fullname: string;
    username: string;
    email: string;
    password: string;
    confirmpassword: string;
}