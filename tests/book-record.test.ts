import {BookRecord} from "../records/book.record";

const defaultObj = {
    id: 'sdadada',
    title: 'Nowa czesc',
    desc: "opis ten powstał by pokazac czy mi to w wogole zadziala albo czy tez nie",
    author: "jan nowak",
    rating: 6.7,
    publisher: 'jakis tam',
    species: 'dramat',
    pages: 400,
}


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
        desc: '',
    })).toThrow('Opis nie może być pusty, ani większy niż 1000 znakóws')
});

test('Validates invalid author', () => {
    expect(()=> new BookRecord({
        ...defaultObj,
        author: "",
    })).toThrow('Imię oraz nazwisko autora nie może być puste, ani być dłuższe niż 100 znaków')
});

test('Validates invalid rating', () => {
    expect(()=> new BookRecord({
        ...defaultObj,
        rating:0,
    })).toThrow('Ocena nie może być mniejsza niż 0 lub większa niż 10')
});
test('Validates invalid publisher', () => {
    expect(()=> new BookRecord({
        ...defaultObj,
        publisher: 'adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod.',
    })).toThrow('Nazwa wydawacy nie może być pusta, ani większa niż 100 znaków')
});

test('Validates invalid species', () => {
    expect(()=> new BookRecord({
        ...defaultObj,
        species: 'adipiscing vitae proin sagittisswacw.',
    })).toThrow('atunek literacki nie może być pusty, ani większa niż 36 znaków')
});