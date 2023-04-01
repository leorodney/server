export interface Form {
    title: string;
    fields: Field[];
};

export interface Field {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}

export interface Swap{
    title: string;
    fields: Field[];
    swap?: boolean = false;
}
