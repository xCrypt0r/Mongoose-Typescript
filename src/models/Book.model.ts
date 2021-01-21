import { model } from 'mongoose';
import IBook from '../interfaces/IBook';
import BookSchema from '../schemas/Book.schema';

const Book = model<IBook>('Book', BookSchema);

export default Book;
