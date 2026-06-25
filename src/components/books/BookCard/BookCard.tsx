import { IBook } from '../../../types/book';

interface BookCardProps {
  book: IBook;
  onBookClick?: (id: string) => void;
}

const BookCard = ({ book, onBookClick }: BookCardProps) => {
  const handleClick = () => {
    if (onBookClick) onBookClick(book.id);
  };

  return (
    <div className="book-card" onClick={handleClick} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{book.title}</h3>
      <p>Автор: {book.author}</p>
      <p>Год: {book.year}</p>
    </div>
  );
};

export default BookCard;