import type { IReader } from '../../../types/reader.types';
interface ReaderCardProps { reader: IReader; }
const ReaderCard = ({ reader }: ReaderCardProps) => {
  const { fullName, email, phone, activeBooks, registrationDate } = reader;
  return (
    <div className="reader-card">
      <div className="reader-card__avatar">👤</div>
      <div className="reader-card__info">
        <h3 className="reader-card__name">{fullName}</h3>
        <p className="reader-card__email">{email}</p>
        <p className="reader-card__phone">{phone}</p>
        <p className="reader-card__registered">Зарегистрирован: {registrationDate.toLocaleDateString('ru-RU')}</p>
        <p className="reader-card__books">Книг на руках: <strong>{activeBooks.length}</strong></p>
      </div>
    </div>
  );
};
export default ReaderCard;