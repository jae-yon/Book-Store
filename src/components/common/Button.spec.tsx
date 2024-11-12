import { render, screen } from '@testing-library/react';
import { BookStoreThemeProvider } from '../../context/themeContext';
import Button from './Button';

describe("component test", () => {
  it("render check", () => {
    // 1. 렌더
    render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary">버튼</Button>
      </BookStoreThemeProvider>
    )
    // 2. 확인
    expect(screen.getByText("버튼")).toBeInTheDocument();
  });

  it("size props check", () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary">버튼</Button>
      </BookStoreThemeProvider>
    );

    expect(screen.getByRole("button")).toHaveStyle({ fontSize: "1.5rem" });
  });
});