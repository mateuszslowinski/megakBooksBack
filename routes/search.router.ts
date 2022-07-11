import {Request, Response, Router} from "express";
import {BookRecord} from "../records/book.record";

export const searchRouter = Router();


searchRouter.get('/:term', async (req: Request, res: Response) => {
    const books = await BookRecord.findBySearch(req.params.term ?? '');

    res.json(books);
})