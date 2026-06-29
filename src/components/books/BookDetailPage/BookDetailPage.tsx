import { useParams } from 'react-router-dom';
import BookDetail from '../../components/books/BookDetail/BookDetail.tsx';
import { mockBooks } from '../../mocks/books';
import './BookDetailPage.css';

const BookDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const book = mockBooks.find(b => b.id === id);

  if (!book) {
    return (
      <div className="not-found">
        <h1>Книга не найдена</h1>
        <p>Книга с ID {id} не существует</p>
      </div>
    );
  }

  return <BookDetail book={book} />;
};

export default BookDetailPage;