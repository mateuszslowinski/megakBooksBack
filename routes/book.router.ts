import {Request, Response, Router} from "express";
import {BookRecord} from "../records/book.record";

export const bookRouter = Router();


bookRouter
    .get('/', async (req: Request, res: Response) => {
        const books = await BookRecord.findAll();

        res.json(books);
    })
    .get('/:id', async (req: Request, res: Response) => {
        const book = await BookRecord.getOne(req.params.id);

        res.json(book);
    })
