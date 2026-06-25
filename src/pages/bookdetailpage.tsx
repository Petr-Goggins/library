import { useParams } from 'react-router-dom';
import { mockBooks } from '../../mocks/books';
import Layout from '../../components/common/Layout/Layout';
import BookInfo from '../../components/books/BookInfo/BookInfo';
import BookReviews from '../../components/books/BookReviews/BookReviews';
import BookActions from '../../components/books/BookActions/BookActions';
import './BookDetailPage.css';

const BookDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const book = mockBooks.find((b) => b.id === id);

  if (!book) {
    return (
      <Layout>
        <div className="not-found">Книга не найдена</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="book-detail-page">
        <BookInfo book={book} />
        <BookReviews reviews={book.reviews || []} />
        <BookActions bookId={book.id} />
      </div>
    </Layout>
  );
};

export default BookDetailPage;