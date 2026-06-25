import type { IReader } from '../../../types/reader.types';
import ReaderCard from '../ReaderCard/ReaderCard';
interface ReaderListProps { readers: IReader[]; }
const ReaderList = ({ readers }: ReaderListProps) => {
  if (readers.length === 0) return <div className="empty-state"><div className="empty-state-icon">👥</div><h3>Читатели не найдены</h3><p>В библиотеке пока нет зарегистрированных читателей</p></div>;
  return <div className="reader-list card-grid">{readers.map(reader => <ReaderCard key={reader.id} reader={reader} />)}</div>;
};
export default ReaderList;