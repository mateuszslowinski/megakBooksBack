import { CollectionEntity, NewCollectionEntity} from "../types";
import {pool} from "../uttils/db";
import {v4 as uuid} from "uuid";
import {ValidationError} from "../uttils/errors";
import {FieldPacket} from "mysql2";

type CollectionRecordResults = [CollectionEntity[], FieldPacket[]];

export class CollectionRecord implements CollectionEntity {
    id: string;
    userId: string;
    bookId: string;

    constructor(obj: NewCollectionEntity) {
        this.id = obj.ID;
        this.userId = obj.userId;
        this.bookId = obj.bookId;
    }

    static async getUserBook(userId: string) {
        const [results] = await pool.execute("SELECT`books`.`id`,`users_books`.`ID`,`books`.`title`,`books`.`author`,`books`.`desc`,`books`.`rating`,`books`.`publisher`,`books`.`pages`, `books`.`species` FROM`books` JOIN`users_books`ON`books`.`id`=`users_books`.`bookId` WHERE userId=:userId", {userId})
        return results
    }
    static async getCollection(id:string){
        const [results] = await pool.execute("SELECT * FROM `users_books` WHERE id =:id", {
            id,
        }) as CollectionRecordResults;
        return results.length === 0 ? null : new CollectionRecord(results[0]);
    }

    async insert(): Promise<string> {
        if (!this.id) {
            this.id = uuid();
        } else {
            throw new ValidationError('Nie można dodać tej samej książki do kolekcji');
        }
        await pool.execute("INSERT INTO `users_books`(`userId`,`bookId`)VALUES(:userId,:bookId)", this)
        return this.id;
    }

    async removeCollection(): Promise<void> {
        if (!this.id) {
            throw new ValidationError('Ta kolekcja nie istnieje')
        }
        await pool.execute('DELETE FROM `users_books` WHERE `id` =:id', {
            id: this.id,
        })
    }
}