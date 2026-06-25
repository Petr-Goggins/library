import type { IReader } from '../types/reader.types';
export const mockReaders: IReader[] = [
  { id: 'r1', fullName: 'Иван Петров', email: 'ivan@example.com', phone: '+7 999 123-45-67', registrationDate: new Date('2023-01-15'), booksHistory: [{ bookId: '1', takenAt: new Date('2023-02-01'), returnedAt: new Date('2023-02-20') }, { bookId: '3', takenAt: new Date('2023-03-10'), returnedAt: new Date('2023-03-25') }], activeBooks: ['2', '5'] },
  { id: 'r2', fullName: 'Мария Смирнова', email: 'maria@example.com', phone: '+7 999 987-65-43', registrationDate: new Date('2023-05-20'), booksHistory: [{ bookId: '4', takenAt: new Date('2023-06-01'), returnedAt: new Date('2023-06-15') }], activeBooks: ['1', '6'] },
  { id: 'r3', fullName: 'Алексей Иванов', email: 'alex@example.com', phone: '+7 999 555-55-55', registrationDate: new Date('2024-01-10'), booksHistory: [], activeBooks: [] }
];