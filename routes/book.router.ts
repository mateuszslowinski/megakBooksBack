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
    .post('/', async (req: Request, res: Response) => {
        const book = new BookRecord(req.body);
        await book.insert();
        res.json(book);
    })
    .patch('/:id', async (req: Request, res: Response) => {

        let book = await BookRecord.getOne(req.params.id);
        book = Object.assign(book, req.body)

        await book.update();
        res.json(book);
    })
    .delete('/:id', async (req: Request, res: Response) => {
        const book = await BookRecord.getOne(req.params.id);
        await book.remove();
        res.json('Deleted');
    })

