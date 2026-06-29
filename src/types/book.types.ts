export interface IBook {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: string;
  isAvailable: boolean;
  description?: string;
  coverImage?: string;
}