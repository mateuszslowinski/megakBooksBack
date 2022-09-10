import {BookEntity, NewBookEntity} from "../types";
import {ValidationError} from "../uttils/errors";
import {pool} from "../uttils/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from 'uuid';
import {validateLength, validateNumber} from "../uttils/validation";


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
        this.title = obj.title.trim();
        this.author = obj.author;
        this.rating = obj.rating;
        this.desc = obj.desc;
        this.publisher = obj.publisher;
        this.species = obj.species;
        this.pages = obj.pages;


        validateLength(obj.title, 200, 'Tytuł ksiąki nie może być pusty, ani dłuższy niż 200 znaków');
        validateLength(obj.author, 100, "Imię oraz nazwisko autora nie może być puste, ani być dłuższe niż 100 znaków");
        validateNumber(obj.rating, 0, 10, "Ocena nie może być mniejsza niż 0 lub większa niż 10");
        validateLength(obj.desc, 2000, "Opis nie może być pusty, ani większy niż 2000 znaków");
        validateLength(obj.publisher, 100, "Nazwa wydawacy nie może być pusta, ani większa niż 100 znaków");
        validateNumber(obj.pages, 1, 5472,"Liczba stron nie może być większa niż 5 472 i mniejsza niż 2");
        validateLength(obj.species, 36, "Gatunek literacki nie może być pusty, ani większa niż 36 znaków");
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
            throw new ValidationError('Nie można dodać coś, co już istnieje');
        }
        await pool.execute('INSERT INTO `books`(`id`,`title`,`author`,`rating`,`desc`,`publisher`,`species`,`pages`) VALUES (:id,:title,:author,:rating,:desc,:publisher,:species,:pages)', this)

        return this.id;
    }

    async remove(): Promise<void> {
        if (!this.id) {
            throw new ValidationError('Ta książka nie istnieje')
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

    static async titleAlphabetically(): Promise<BookRecord[]> {
        const [results] = await pool.execute('SELECT * FROM `books` ORDER BY `title`') as BookRecordResults
        return results.map(obj => new BookRecord(obj));
    }
}