import {BookEntity} from "../types";
import {ValidationError} from "../uttils/errors";


export class BookRecord implements BookEntity {
    id: string;
    title: string;
    author: string;
    rating: number;
    desc: string;
    publisher: string;
    species: string;
    pages: number;


    constructor(obj: BookEntity) {
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
        if (!obj.desc || obj.desc.length > 1000) {
            throw new ValidationError("Opis nie może być pusty, ani większy niż 1000 znakóws");
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

}