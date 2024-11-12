import React from 'react';
import { render, screen } from '@testing-library/react';
import { BookStoreThemeProvider } from '../../context/themeContext';
import InputText from './InputText';

describe("component test", () => {
  it("render check", () => {
    // 1. 렌더
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="입력란" />
      </BookStoreThemeProvider>
    )
    // 2. 확인
    expect(screen.getByPlaceholderText("입력란")).toBeInTheDocument();
  });

  it("ref check", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="입력란" ref={ref} />
      </BookStoreThemeProvider>
    )

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});