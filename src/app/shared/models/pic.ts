export interface Pic {
    id: string;
    alt: string;
    url: string;
    author?: string;
    tags?: Tag[];
}

export interface Tag {
    title: string;
}