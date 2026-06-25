import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import BooksPage from './pages/BooksPage/BooksPage';
import ReadersPage from './pages/ReadersPage/ReadersPage';
import ReaderProfilePage from './pages/ReaderProfilePage/ReaderProfilePage';
import BookDetailPage from './pages/BookDetailPage/BookDetailPage';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BooksPage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="book/:id" element={<BookDetailPage />} />
        <Route path="readers" element={<ReadersPage />} />
        <Route path="reader/:id" element={<ReaderProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;