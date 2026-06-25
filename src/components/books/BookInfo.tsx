import { IBook } from '../../../types/book.types';

interface BookInfoProps {
  book: IBook;
}

const BookInfo = ({ book }: BookInfoProps) => {
  return (
    <div className="book-info">
      <h1>{book.title}</h1>
      <p><strong>Автор:</strong> {book.author}</p>
      <p><strong>Год:</strong> {book.year}</p>
      <p><strong>Жанр:</strong> {book.genre}</p>
      <p><strong>Описание:</strong> {book.description}</p>
    </div>
  );
};

export default BookInfo;