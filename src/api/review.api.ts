import { httpClient, requestHandler } from "@/api/http";
import { BookReviewItem, BookReviewItemWrite } from "@/models/book.model";

export const fetchBookReview = async (bookId: string) => {
  const response = await httpClient.get<BookReviewItem[]>(`/reviews/${bookId}`);
  return response.data;
  // return await requestHandler<BookReviewItem[]>("get", `/reviews/${bookId}`);
}

interface AddBookReviewResponse {
  message: string;
}

export const addBookReview = async (bookId: string, data: BookReviewItemWrite) => {
  const response = await httpClient.post<AddBookReviewResponse>(`/reviews/${bookId}`);
  return response.data;
}