import {FieldPacket} from "mysql2";
import {NewUserEntity, UserEntity} from "../types";
import {pool} from "../uttils/db";
import {validateEmail, validateLength} from "../uttils/validation";
import {ValidationError} from "../uttils/errors";
import {v4 as uuid} from "uuid";
import bcrypt from "bcrypt";
import {generateToken} from "../uttils/token";

type UserRecordResults = [UserEntity[], FieldPacket[]];

export class UserRecord implements UserEntity {
    id: string;
    name: string;
    email: string;
    password: string;
    token: string;
    isAdmin: boolean;
    createdAt: Date;

    constructor(obj: NewUserEntity) {
        validateLength(obj.name, 30, 'Nazwa użytkownika nie może być pusta, ani większa niż 30 znaków');
        validateLength(obj.email, 40, 'Email nie może być pusty, ani większy niż 40 znaków');

        if (!obj.password) {
            throw new ValidationError("Hasło nie moze być puste")
        }
        if (!validateEmail(obj.email)) {
            throw new ValidationError('Niepoprawny email.')
        }

        this.id = obj.id;
        this.name = obj.name;
        this.email = obj.email;
        this.password = obj.password;
        this.token= obj.token;
        this.isAdmin = obj.isAdmin;
        this.createdAt = obj.createdAt;
    }

    static async getUser(email: string): Promise<UserRecord> {
        const [result] = await pool.execute("SELECT * FROM `users` WHERE email=:email", {
            email,
        }) as UserRecordResults;
        return result.length === 0 ? null : new UserRecord(result[0]);
    }

    static async getAllUser(): Promise<UserRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `users`") as UserRecordResults;
        return results.map(user => new UserRecord(user));
    }

    static async getUserByToken(token:string) {
        const [result] = await pool.execute("SELECT * FROM `users` WHERE token=:token", {
            token,
        }) as UserRecordResults;
        return result.length === 0 ? null : new UserRecord(result[0]);
    }

    async insert(): Promise<string> {
        this.isAdmin = false;
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        this.token = generateToken(this.id);

        if (!this.id) {
            this.id = uuid();
        } else {
            throw new ValidationError('Nie można dodać coś, co już istnieje');
        }
        await pool.execute('INSERT INTO `users`(`id`,`name`,`email`, `password`,`token`,`isAdmin`) VALUES' +
            ' (:id,:name,:email,:password,:token,:isAdmin)', this)
        return this.id;
    }

    async remove(): Promise<void> {
        if (!this.id) {
            throw new ValidationError('Nie ma takiego użytkownika')
        }
        await pool.execute('DELETE FROM `users` WHERE `id` =:id', {
            id: this.id,
        })
    }
}