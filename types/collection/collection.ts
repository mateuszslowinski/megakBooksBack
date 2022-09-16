export interface NewCollectionEntity extends Omit<CollectionEntity, 'id'> {
    ID?: string;
}

export interface CollectionEntity {
    id: string;
    userId: string;
    bookId: string
}