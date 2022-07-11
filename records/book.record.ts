import {BookEntity, NewBookEntity} from "../types";
import {ValidationError} from "../uttils/errors";
import {pool} from "../uttils/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from 'uuid';


type BookRecordResults = [BookEntity[], FieldPacket[]];

export class BookRecord implements BookEntity {
    id: string;
    title: string;
    author: string;
    rating: number;
    desc: string;
    publisher: string;
    species: string;
    pages: number;


    constructor(obj: NewBookEntity) {
        this.id = obj.id;
        this.title = obj.title;
        this.author = obj.author;
        this.rating = obj.rating;
        this.desc = obj.desc;
        this.publisher = obj.publisher;
        this.species = obj.species;
        this.pages = obj.pages;


        if (!obj.title || obj.title.length > 200) {
            throw new ValidationError("Tytuł ksiąki nie może być pusty, ani dłuższy niż 200 znaków");
        }

        if (!obj.author || obj.author.length > 100) {
            throw new ValidationError("Imię oraz nazwisko autora nie może być puste, ani być dłuższe niż 100 znaków");
        }
        if (!obj.rating || obj.rating > 10 || obj.rating < 0) {
            throw new ValidationError("Ocena nie może być mniejsza niż 0 lub większa niż 10");
        }
        if (!obj.desc || obj.desc.length > 2000) {
            throw new ValidationError("Opis nie może być pusty, ani większy niż 2000 znakóws");
        }
        if (!obj.publisher || obj.publisher.length > 100) {
            throw new ValidationError("Nazwa wydawacy nie może być pusta, ani większa niż 100 znaków");
        }
        if (!obj.pages || obj.pages > 5472 || obj.pages < 1) {
            throw new ValidationError("Liczba stron nie może być większa niż 5 472 i mniejsza niż 2");
        }
        if (!obj.species || obj.species.length > 36) {
            throw new ValidationError("Gatunek literacki nie może być pusty, ani większa niż 36 znaków");
        }
    }

    static async getOne(id: string): Promise<BookRecord> | null {
        const [results] = await pool.execute("SELECT * FROM `books` WHERE id =:id", {
            id,
        }) as BookRecordResults;

        return results.length === 0 ? null : new BookRecord(results[0]);

    }

    static async findAll(): Promise<BookRecord[]> {

        const [results] = await pool.execute("SELECT * FROM `books`") as BookRecordResults;
        return results.map(obj => new BookRecord(obj));
    }

    async insert(): Promise<string> {
        if (!this.id) {
            this.id = uuid();
        } else {
            throw new ValidationError('Cannot insert something that is already inserted');
        }
        await pool.execute('INSERT INTO `books`(`id`,`title`,`author`,`rating`,`desc`,`publisher`,`species`,`pages`) VALUES (:id,:title,:author,:rating,:desc,:publisher,:species,:pages)', this)

        return this.id;
    }

    async remove(): Promise<void> {
        if (!this.id) {
            throw new ValidationError('This book does not exist')
        }
        await pool.execute('DELETE FROM `books` WHERE `id` =:id', {
            id: this.id,
        })
    }

    async update(): Promise<void> {
        await pool.execute('UPDATE `books` SET `title`=:title, `author` = :author, `rating` = :rating, `desc`=:desc, `publisher`=:publisher, `species`=:species, `pages`=:pages WHERE `id`=:id', this);
    }

    static async findBySearch(param: string): Promise<BookEntity[] | null> {
        const [results] = await pool.execute("SELECT * FROM `books` WHERE `title` LIKE:param", {
            param,
        }) as BookRecordResults
        return results.map(obj => new BookRecord(obj));
    }

    static async findByRatingIncrease(): Promise<BookRecord[]> {
        const [results] = await pool.execute('SELECT * FROM `books` ORDER BY `rating` DESC') as BookRecordResults
        return results.map(obj => new BookRecord(obj));
    }

    static async findByRatingDecrease(): Promise<BookRecord[]> {
        const [results] = await pool.execute('SELECT * FROM `books` ORDER BY `rating`') as BookRecordResults
        return results.map(obj => new BookRecord(obj));
    }

    static async titleAlphabetically():Promise<BookRecord[]> {
        const [results] = await pool.execute('SELECT * FROM `books` ORDER BY `title`') as BookRecordResults
        return results.map(obj => new BookRecord(obj));
    }
}