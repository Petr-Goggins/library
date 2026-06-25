import { useState } from 'react';
import Layout from '../../components/common/Layout/Layout';
import BookList from '../../components/books/BookList/BookList';
import BookSearch from '../../components/books/BookSearch/BookSearch';
import { mockBooks } from '../../mocks/books';
import '../../styles/books.css';
const BooksPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredBooks = mockBooks.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <Layout>
      <h1 className="page-title">Каталог книг</h1>
      <p className="page-subtitle">Всего книг: <strong>{mockBooks.length}</strong></p>
      <div className="page-toolbar">
        <BookSearch onSearch={setSearchQuery} />
        {searchQuery && <span className="search-result-count">Найдено: {filteredBooks.length}</span>}
      </div>
      <BookList books={filteredBooks} />
    </Layout>
  );
};
export default BooksPage;