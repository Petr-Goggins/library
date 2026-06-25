import type { IReader } from '../../../types/reader.types';
interface ReaderProfileProps { reader: IReader; }
const ReaderProfile = ({ reader }: ReaderProfileProps) => {
  const { fullName, email, phone, registrationDate, booksHistory, activeBooks } = reader;
  return (
    <div className="profile-wrapper">
      <div className="profile-header"><div className="profile-avatar">👤</div><div className="profile-info"><h1>{fullName}</h1><p><strong>Email:</strong> {email}</p><p><strong>Телефон:</strong> {phone}</p><p><strong>Дата регистрации:</strong> {registrationDate.toLocaleDateString('ru-RU')}</p></div></div>
      <div className="profile-section"><h2>Активные книги</h2>{activeBooks.length === 0 ? <p>Нет книг на руках</p> : <ul>{activeBooks.map(bookId => <li key={bookId}>Книга ID: {bookId}</li>)}</ul>}</div>
      <div className="profile-section"><h2>История выдач</h2>{booksHistory.length === 0 ? <p>История пуста</p> : <ul>{booksHistory.map((entry, idx) => <li key={idx}>Книга {entry.bookId} – взята {entry.takenAt.toLocaleDateString('ru-RU')}{entry.returnedAt && `, возвращена ${entry.returnedAt.toLocaleDateString('ru-RU')}`}{!entry.returnedAt && ' (не возвращена)'}</li>)}</ul>}</div>
    </div>
  );
};
export default ReaderProfile;