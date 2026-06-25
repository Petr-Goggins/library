import { useState } from 'react';
interface BookSearchProps { onSearch: (query: string) => void; }
const BookSearch = ({ onSearch }: BookSearchProps) => {
  const [query, setQuery] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };
  const handleClear = () => { setQuery(''); onSearch(''); };
  return (
    <div className="book-search">
      <input type="text" className="book-search-input" placeholder="🔍 Поиск по названию или автору..." value={query} onChange={handleChange} />
      {query && <button className="book-search-clear" onClick={handleClear}>✕</button>}
    </div>
  );
};
export default BookSearch;