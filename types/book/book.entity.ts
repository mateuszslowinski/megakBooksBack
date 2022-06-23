export interface NewBookEntity extends Omit<BookEntity, "id"> {
    id?: string;
}

export interface SimpleBookEntity {
    id: string;
    title: string;
    author: string;
    rating: number;
    desc: string;
}


export interface BookEntity extends SimpleBookEntity {
    publisher: string;
    species: string;
    pages: number;
}