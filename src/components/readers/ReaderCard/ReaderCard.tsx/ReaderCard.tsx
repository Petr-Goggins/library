import { useNavigate } from 'react-router-dom';
import { IReader } from '../../../types/reader.types';

interface ReaderCardProps {
  reader: IReader;
}

const ReaderCard = ({ reader }: ReaderCardProps) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/reader/${reader.id}`);
  };

  return (
    <div className="reader-card">
      <div className="reader-card__avatar">👤</div>
      <h3 className="reader-card__name">{reader.fullName}</h3>
      <p className="reader-card__email">{reader.email}</p>
      <p className="reader-card__phone">{reader.phone}</p>
      <p className="reader-card__books">Книг на руках: {reader.activeBooks.length}</p>
      <button onClick={handleProfileClick} className="btn btn-primary">
        Профиль
      </button>
    </div>
  );
};

export default ReaderCard;