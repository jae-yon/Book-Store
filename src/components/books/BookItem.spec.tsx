import { render, screen } from '@testing-library/react';
import { BookStoreThemeProvider } from '../../context/themeContext';
import BookItem from './BookItem';

const dummyBook = {
  id: 1,
  title: "Dummy Book",
  img: 5,
  category_id: 1,
  summary: "Dummy Summary",
  author: "Dummy Author",
  price: 10000,
  likes: 1,
  form: "paperback",
  isbn: "Dummy ISBN",
  detail: "Dummy Detail",
  pages: 100,
  contents: "Dummy Contents",
  pubDate: "2021-01-01",
}

describe("BookItem", () => {
  it("render check", () => {
    // 1. 렌더
    const { getByText, getByAltText } = render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>
    );
  });

  expect(screen.getByText(dummyBook.title)).toBeInTheDocument();
  expect(screen.getByText(dummyBook.summary)).toBeInTheDocument();
  expect(screen.getByText(dummyBook.author)).toBeInTheDocument();
  expect(screen.getByText("10,000원")).toBeInTheDocument();
  expect(screen.getByText(dummyBook.likes)).toBeInTheDocument();
  expect(screen.getByAltText(dummyBook.img)).toHaveAttribute("src", `https://picsum.photos/id/${dummyBook.img}/600/600`);
});