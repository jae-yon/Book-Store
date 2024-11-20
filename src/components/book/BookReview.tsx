import { BookReviewItemWrite, BookReviewItem as IBookReviewItem } from "@/models/book.model";
import styled from "styled-components";
import BookReviewItem from "./BookReviewItem";
import BookReviewAdd from "./BookReviewAdd";

interface Props {
  reviews: IBookReviewItem[];
  onAdd: (data: BookReviewItemWrite) => void;
}

function BookReview({ reviews, onAdd }: Props) {
  return (
    <BookReviewStyle>
      <BookReviewAdd onAdd={onAdd} />
      {
        reviews.map((review) => (
          <BookReviewItem key={review.id} review={review} />
        ))
      }
    </BookReviewStyle>
  );
}

const BookReviewStyle = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default BookReview;