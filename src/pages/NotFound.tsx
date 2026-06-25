import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found" style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default NotFound;