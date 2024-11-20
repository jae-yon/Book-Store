import { BookReviewItem } from "@/models/book.model";
import { http, HttpResponse } from "msw";
import { fakerKO as faker } from "@faker-js/faker";

const mockReviewData: BookReviewItem[] = Array.from({length: 8}).map((_, index) => ({
  id: index,
  userName: `${faker.person.lastName()}${faker.person.firstName()}`,
  content: faker.lorem.paragraph(),
  createdAt: faker.date.past().toISOString(),
  score: faker.number.int({min: 1, max: 5}),
}));

// 리뷰 데이터 불러오기
export const reviewById = http.get("http://localhost:9999/reviews/:bookId", () => {
  const data: BookReviewItem[] = mockReviewData;
  return HttpResponse.json(data, {
    status: 200,
  });
});

// 리뷰 데이터 등록하기
export const addReview = http.post("http://localhost:9999/reviews/:bookId", () => {
  return HttpResponse.json(
    {
      message: "리뷰가 등록되었습니다",
    },
    {
      status: 200,
    }
  )
});