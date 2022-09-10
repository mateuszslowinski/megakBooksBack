import {UserEntity} from "../types/user";
import {UserRecord} from "../records/user.record";

const defaultObj: UserEntity = {
    id: "1",
    name: "janek",
    email: "test@gmail.com",
    password: "123",
    isAdmin: false,
    createdAt: new Date()
}

test('Can build UserRecord', () => {
    const user = new UserRecord(defaultObj);

    expect(user.id).toBe('1');
    expect(user.name).toBe('janek');
    expect(user.email).toBe('test@gmail.com');
    expect(user.password).toBe("123");
    expect(user.isAdmin).toBe(false);
});

test('Validates invalid name', () => {
    expect(() => new UserRecord({
        ...defaultObj,
        name: '',
    })).toThrow('Nazwa użytkownika nie może być pusta, ani większa niż 30 znaków')
});

test('Validates invalid email', () => {
    expect(() => new UserRecord({
        ...defaultObj,
        email: 'test',
    })).toThrow('Niepoprawny email.')
});

test('Validates invalid password', () => {
    expect(() => new UserRecord({
        ...defaultObj,
        password: '',
    })).toThrow("Hasło nie moze być puste")
});