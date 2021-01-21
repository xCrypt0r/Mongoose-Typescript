import 'dotenv/config';
import connect from './db';
import BookController from './controllers/Book.controller';

connect();

async function main() {
    let book = await BookController.CreateBook({
        title: 'test',
        cost: 10000
    });

    console.log(book);
}

main();
