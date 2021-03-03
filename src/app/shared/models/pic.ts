export interface Pic {
    id?: number;
    picId: string;
    alt: string;
    url: string;
    author?: string;
    tags?: Tag[];
}

export interface Tag {
    title: string;
}