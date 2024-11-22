import { fetchBestBooks, fetchBooks } from "@/api/books.api";
import { fetchReviewAll } from "@/api/review.api";
import { Book, BookReviewItem } from "@/models/book.model";
import { useEffect, useState } from "react"

export const useMain = () => {
  const [newBooks, setNewBooks] = useState<Book[]>([]);
  const [bestBooks, setBestBooks] = useState<Book[]>([]);
  const [reviews, setReviews] = useState<BookReviewItem[]>([]);

  useEffect(() => {

    fetchBooks({category_id: undefined, news: true, currentPage: 1, limit: 4}).then(({ books }) => {
      setNewBooks(books);
    });

    fetchBestBooks().then((books) => {
      setBestBooks(books);
    });

    fetchReviewAll().then((reviews) => {
      setReviews(reviews);
    });
  }, []);
  


  return { newBooks, reviews, bestBooks };
}