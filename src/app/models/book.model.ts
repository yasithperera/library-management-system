export interface Book {
  id?: string;
  title: string;
  authorId: string;
  genre: string;
  isbn: string;
  description?: string;
  coverImageUrl?: string;
  tags: string[];
}

export interface BookDTO {
  title: string;
  authorId: string;
  genre: string;
  isbn: string;
  description?: string;
  coverImageUrl?: string;
  tags: string[];
}


