import { Request, Response } from 'express';
import db from '../../database/db'

//Get Method (all of them)
export const getBooks = async (req: Request, res: Response): Promise<void> => {
    try{
        const [rows] = await db.execute(`
                SELECT 
                books.id,
                books.book_cover,
                authors.name AS author,
                books.genre,
                books.publishing_year,
                publishers.name AS publisher,
                books.ISBN,
                books.description
            FROM books
            JOIN authors ON books.author = authors.id
            LEFT JOIN publishers ON books.publisher = publishers.id
        `);
        res.json(rows);
    } catch (err){
        console.error(err);
        res.status(500).send('Error fetching books ' + err)
    }
    res.status(200).send();
};
//Get Method by Id
export const getBooksById = async (req: Request, res: Response): Promise<void> => {
    try{
        const { id } = req.params;
        const book = await db.execute('SELECT * FROM books WHERE id = ?', [id]);
        res.json(book);
    } catch (err){
        console.error(err);
        res.status(500).send('Error fetching Books ' + err)
    }
    res.status(200).send();
};

//Create Method
export const createBooks = async (req: Request, res: Response): Promise<void> => {
    const { name, book_cover, author, genre, publishing_year, publisher, ISBN, description } = req.body;
    try{
        const [result] = await db.execute(`
                INSERT INTO books (
                name, 
                book_cover, 
                author, 
                genre, 
                publishing_year,
                publisher, 
                ISBN, 
                description) 
                VALUES (?,?,?,?,?,?,?,?)`, [
                    name, 
                    book_cover || null, 
                    author, 
                    genre || null, 
                    publishing_year || null, 
                    publisher || null, 
                    ISBN || null, 
                    description || null]
        );
        console.log('Added book', result);
    } catch (err) {
        console.error('Error executing query: ' + err);
    }
    res.status(200).send();
};

//Delete Method by id
export const deleteBooks = async (req: Request, res: Response): Promise<void> =>{
    const { id } = req.params;
    try{
        const [result] = await db.execute('DELETE FROM books WHERE id = ?', [id]);
        console.log('Deleted book', result);
    } catch (err) {
        console.error('Error executing query: ' + err);
    }
    res.status(200).send();
};

//Put Method by id
export const updateBooks = async (req: Request, res: Response): Promise<void> =>{
    const { id } = req.params;
    const { name, book_cover, author, genre, publishing_year, publisher, ISBN, description } = req.body;
    try{
        const [result] = await db.execute(`
                UPDATE books SET 
                name = ?, 
                book_cover = ?, 
                author = ?, 
                genre = ?, 
                publishing_year = ?, 
                publisher = ?, 
                ISBN = ?, 
                description = ? 
                WHERE id = ?`, [
                    name, 
                    book_cover, 
                    author, 
                    genre, 
                    publishing_year, 
                    publisher, 
                    ISBN, 
                    description, 
                    id]
        );
        console.log('Updated book', result);
    } catch (err) {
        console.error('Error executing query: ' + err);
    }
    res.status(200).send();
};