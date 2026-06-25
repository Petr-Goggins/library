import Layout from '../../components/common/Layout/Layout';
import ReaderList from '../../components/readers/ReaderList/ReaderList';
import { mockReaders } from '../../mocks/readers';
import '../../styles/readers.css';

const ReadersPage = () => {
  return (
    <Layout>
      <h1 className="page-title">Читатели библиотеки</h1>
      <p className="page-subtitle">Всего читателей: <strong>{mockReaders.length}</strong></p>
      <ReaderList readers={mockReaders} />
    </Layout>
  );
};

export default ReadersPage;