import {BookRecord} from "../records/book.record";


const defaultObj = {
    title: 'Nowa  czesc',
    desc: "opis ten powstał by pokazac czy mi to w wogole zadziala albo czy tez nie",
    author: "jan II nowak",
    rating: 5.7,
    publisher: 'Jakis tam',
    species: 'Dramat',
    pages: 400,
}


test('BookRecord.insert inserts new book to database', async () => {
    const book = new BookRecord(defaultObj,);
    await book.insert();

    const foundBook = await BookRecord.getOne(book.id);
    expect(foundBook).toBeDefined();
    expect(typeof foundBook.id).toBe('string');
});


test('BookRecord returns data from database for one enrty', async () => {
    const book = await BookRecord.getOne('abc');

    expect(book).toBeDefined();
    expect(book.id).toBe('abc');

});
test('BookRecord.findAll returns array of all books from database', async () => {
    const books = await BookRecord.findAll();

    expect(books).not.toEqual([]);
    expect(books[0].id).toBeDefined();
});


// test('BookRecord.delete removes book from database', async () => {
//     const book = await BookRecord.getOne('ad');
//     await book.remove();
//     expect(book).toBeDefined();
//
//     const book2 = await BookRecord.getOne('ad');
//     expect(book2).toBeNull();
// });


test('BookRecord.update edit already exist book in database.', async () => {
    const book = await BookRecord.getOne('test');
    book.author = 'oleg twardy';

    await book.update();
    expect(book.author).toBe('oleg twardy');
})

