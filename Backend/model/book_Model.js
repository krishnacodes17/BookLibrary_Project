import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    Image:String,
    title:String
})

const Book = mongoose.model("Book",bookSchema);

export default Book;