import IBook from '../interfaces/IBook';
import Book from '../models/Book.model';

interface ICreateBookInput {
    title: IBook['title'];
    cost: IBook['cost'];
}

async function CreateBook({ title, cost }: ICreateBookInput): Promise<IBook> {
    return await Book.create({ title, cost })
        .then((data: IBook) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

export default { CreateBook };
