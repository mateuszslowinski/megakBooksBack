import {Request, Response, Router} from "express";
import bcrypt from 'bcrypt';
import {UserRecord} from "../records/user.record";
import {ValidationError} from "../uttils/errors";

export const userRouter = Router();

userRouter
    .get('/', async (req: Request, res: Response) => {
        const users = await UserRecord.getAllUser();
        res.status(200).json(users)
    })
    .get('/:token', async (req: Request, res: Response) => {
        const user = await UserRecord.getUserByToken(req.params.token);
        res.status(201).json({
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    })
    .post('/register', async (req: Request, res: Response) => {
        const {email} = req.body;
        const isUserExist = await UserRecord.getUser(email);
        if (isUserExist) {
            throw new ValidationError('Podany użytkownik już istniej')
        }
        try {
            const newUser = await new UserRecord({
                ...req.body,
            });
            await newUser.insert();
            res.status(201).json({message: 'Użytkownik został zarejstrowany'})
        } catch (e) {
            throw new ValidationError(e.message);
        }
    })
    .post('/', async (req: Request, res: Response) => {
        const {email, password} = req.body;
        const user = await UserRecord.getUser(email)
        if (!user) {
            throw new ValidationError("Użytkownik o podanym emailu nie istnieje")
        }
        const isCorrectPassword = await bcrypt.compare(password, user.password);

        if (!isCorrectPassword) {
            throw new ValidationError('Podane hasło jest nie prawidłowe.')
        }
        if (user && isCorrectPassword) {
            res.status(201).json({
                name: user.name,
                email: user.email,
                token: user.token,
                isAdmin: user.isAdmin
            })
        } else {
            throw new ValidationError('Nie udana próba zalogowania')
        }
    })
    .delete('/', async (req: Request, res: Response) => {
        const {email} = req.body;

        const user = await UserRecord.getUser(email);
        await user.remove()
        res.json('Użytkownik został usunięty');
    })