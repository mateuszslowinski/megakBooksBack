import {Request, Response, Router} from "express";
import {BookRecord} from "../records/book.record";

export const selectRouter = Router();


selectRouter

    .get('/increase', async (req: Request, res: Response) => {
        const books = await BookRecord.findByRatingIncrease();

        res.json(books);
    })
    .get('/decrease', async (req: Request, res: Response) => {
        const books = await BookRecord.findByRatingDecrease();

        res.json(books);
    })
    .get('/alphabetically', async (req: Request, res: Response) => {
        const books = await BookRecord.titleAlphabetically();
        res.json(books)
    })


