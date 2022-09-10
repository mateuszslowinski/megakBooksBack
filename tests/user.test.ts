import {NewUserEntity} from "../types/user";
import {UserRecord} from "../records/user.record";

const defaultObj: NewUserEntity = {
    name: "janek",
    email: "test@gmail.com",
    password: "123",
    isAdmin: false,
    createdAt: new Date()
}

test('UserRecord.insert inserts new user to database', async () => {
    const user = new UserRecord(defaultObj);
    await user.insert();

    const foundUser = await UserRecord.getUser(user.email);
    expect(foundUser).toBeDefined();
    expect(typeof foundUser.id).toBe('string');
})

test('UserRecord.findAll returns array of all users from database', async () => {
    const users = await UserRecord.getAllUser();

    expect(users).not.toEqual([]);
    expect(users[0].id).toBeDefined();
});
//
// test('UserRecord.remove removes user from database', async () => {
//     const book = await UserRecord.getUser('test@gmail.com');
//     await book.remove();
//     expect(book).toBeDefined();
//
//     const book2 = await UserRecord.getUser('test@gmail.com');
//     expect(book2).toBeNull();
// });
