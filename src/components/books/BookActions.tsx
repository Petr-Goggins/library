import { useNavigate } from 'react-router-dom';

interface BookActionsProps {
  bookId: string;
}

const BookActions = ({ bookId }: BookActionsProps) => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);
  const handleBorrow = () => {
    alert(`Книга ${bookId} взята!`);
  };

  return (
    <div className="book-actions" style={{ marginTop: '20px' }}>
      <button onClick={handleBack} style={{ marginRight: '10px' }}>Назад</button>
      <button onClick={handleBorrow}>Взять книгу</button>
    </div>
  );
};

export default BookActions;