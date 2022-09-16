import express from "express";
import cors from 'cors';
import "express-async-errors";
import {handleError} from "./uttils/errors";
import rateLimit from "express-rate-limit";
import {bookRouter} from "./routes/book.router";
import {selectRouter} from "./routes/select.router";
import {searchRouter} from "./routes/search.router";
import {config} from "./config/config";
import {userRouter} from "./routes/user.router";

const app = express();

app.use(cors({
    origin: config.corsOrigin,
}));
app.use(express.json());

app.use(rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
}));

app.use('/api/books', bookRouter);
app.use('/api/select', selectRouter);
app.use('/api/search', searchRouter);
app.use('/api/users',userRouter)
app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listing on http://localhost:3001')
})