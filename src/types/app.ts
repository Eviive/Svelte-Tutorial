export type Todo = {
    id: number;
    todo: string;
    completed: boolean;
};

export type Page<K extends string, C> = {
    [key in K]: C[];
} & PageMetadata;

type PageMetadata = {
    total: number;
    skip: number;
    limit: number;
};
