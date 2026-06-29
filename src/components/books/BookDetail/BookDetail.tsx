import { IBook } from '../../../types/book.types';

interface BookDetailProps {
  book: IBook;
}

const BookDetail = ({ book }: BookDetailProps) => {
  const { title, author, year, genre, isAvailable, description, coverImage } = book;
  return (
    <div className="book-detail">
      {coverImage && <img src={coverImage} alt={title} className="book-detail__cover" />}
      <div className="book-detail__info">
        <h1 className="book-detail__title">{title}</h1>
        <p className="book-detail__author">{author}</p>
        <p className="book-detail__meta">{genre} • {year}</p>
        <p className="book-detail__status">
          Статус: <span className={isAvailable ? 'text-success' : 'text-danger'}>
            {isAvailable ? 'Доступна' : 'Выдана'}
          </span>
        </p>
        {description && <p className="book-detail__description">{description}</p>}
      </div>
    </div>
  );
};

export default BookDetail;