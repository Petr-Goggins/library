interface Review {
  user: string;
  text: string;
  rating: number;
}

interface BookReviewsProps {
  reviews: Review[];
}

const BookReviews = ({ reviews }: BookReviewsProps) => {
  return (
    <div className="book-reviews">
      <h2>Отзывы</h2>
      {reviews.length === 0 ? (
        <p>Пока нет отзывов</p>
      ) : (
        <ul>
          {reviews.map((review, idx) => (
            <li key={idx}>
              <strong>{review.user}</strong> – {review.rating}★
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookReviews;