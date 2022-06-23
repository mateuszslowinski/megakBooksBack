import {BookRecord} from "../records/book.record";
import {BookEntity} from "../types";

 const defaultObj:BookEntity = {
    id: 'sdadada',
    title: 'Nowa czesc',
    desc: "opis ten powstał by pokazac czy mi to w wogole zadziala albo czy tez nie",
    author: "jan nowak",
    rating: 6.7,
    publisher: 'jakis tam',
    species: 'dramat',
    pages: 400,
}
const generateStringLength = (count: number): string => {
    let char = '';
    while (char.length < count) {
        char += 'a';
    }
    return char;
};

test('Can build BookRecord', () => {
    const book = new BookRecord(defaultObj);

    expect(book.id).toBe('sdadada');
    expect(book.title).toBe('Nowa czesc');
    expect(book.desc).toBe('opis ten powstał by pokazac czy mi to w wogole zadziala albo czy tez nie');
    expect(book.rating).toBe(6.7);
    expect(book.pages).toBe(400);
    expect(book.author).toBe('jan nowak');
    expect(book.publisher).toBe('jakis tam');
    expect(book.species).toBe('dramat');
});


test('Validates invalid title', () => {
    expect(()=> new BookRecord({
        ...defaultObj,
        title: '',
    })).toThrow('Tytuł ksiąki nie może być pusty, ani dłuższy niż 200 znaków')
});

test('Validates invalid desc', () => {
    expect(()=> new BookRecord({
        ...defaultObj,
        desc: generateStringLength(2001),
    })).toThrow('Opis nie może być pusty, ani większy niż 2000 znakóws')
});

test('Validates invalid author', () => {
    expect(()=> new BookRecord({
        ...defaultObj,
        author: generateStringLength(101),
    })).toThrow('Imię oraz nazwisko autora nie może być puste, ani być dłuższe niż 100 znaków')
});

test('Validates invalid rating', () => {
    expect(()=> new BookRecord({
        ...defaultObj,
        rating:10.1,
    })).toThrow('Ocena nie może być mniejsza niż 0 lub większa niż 10')
});

test('Validates invalid publisher', () => {
    expect(()=> new BookRecord({
        ...defaultObj,
        publisher: generateStringLength(101),
    })).toThrow('Nazwa wydawacy nie może być pusta, ani większa niż 100 znaków')
});

test('Validates invalid species', () => {
    expect(()=> new BookRecord({
        ...defaultObj,
        species: generateStringLength(37),
    })).toThrow('atunek literacki nie może być pusty, ani większa niż 36 znaków')
});