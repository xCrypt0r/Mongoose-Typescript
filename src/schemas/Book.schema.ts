import { Schema } from 'mongoose';

const BookSchema = new Schema({
    title: { type: String, required: true },
    cost: { type: Number, required: true }
});

export default BookSchema;
