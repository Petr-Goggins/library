import { IReader } from '../types/reader.types.ts';

export const mockReaders: IReader[] = [
  {
    id: 'r1',
    fullName: 'Иван Петров',
    email: 'ivan@example.com',
    phone: '+7 (123) 456-78-90',
    registrationDate: new Date('2023-01-15'),
    booksHistory: [
      { bookId: '1', takenAt: new Date('2023-02-01'), returnedAt: new Date('2023-02-15') },
      { bookId: '3', takenAt: new Date('2023-03-01') }
    ],
    activeBooks: ['3']
  },
  {
    id: 'r2',
    fullName: 'Мария Смирнова',
    email: 'maria@example.com',
    phone: '+7 (987) 654-32-10',
    registrationDate: new Date('2023-03-20'),
    booksHistory: [
      { bookId: '2', takenAt: new Date('2023-04-01'), returnedAt: new Date('2023-04-20') },
      { bookId: '5', takenAt: new Date('2023-05-01') }
    ],
    activeBooks: ['5']
  },
  {
    id: 'r3',
    fullName: 'Алексей Иванов',
    email: 'alexey@example.com',
    phone: '+7 (456) 789-01-23',
    registrationDate: new Date('2023-06-10'),
    booksHistory: [
      { bookId: '4', takenAt: new Date('2023-07-01'), returnedAt: new Date('2023-07-15') },
      { bookId: '6', takenAt: new Date('2023-08-01'), returnedAt: new Date('2023-08-10') }
    ],
    activeBooks: []
  }
];