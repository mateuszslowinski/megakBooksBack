import {Request, Response, Router} from "express";
import {CollectionRecord} from "../records/collection.record";
import {ValidationError} from "../uttils/errors";

export const collectionRouter = Router();


collectionRouter
    .get('/:id', async (req: Request, res: Response) => {
        const books = await CollectionRecord.getUserBook(req.params.id);
        res.status(200).json(books)
    })
    .post('/', async (req: Request, res: Response) => {
        try {
            const newCollection = await new CollectionRecord({
                ...req.body,
            });
            await newCollection.insert();
            res.status(201).json({message: 'Książka została dodana do kolekcji'})
        } catch (e) {
            throw new ValidationError(e.message);
        }
    })
    .delete('/:id', async (req: Request, res: Response) => {
        const collection = await CollectionRecord.getCollection(req.params.id);
        await collection.removeCollection()
        res.status(204).json({message: 'Kolekcja została usunięta'});
    })