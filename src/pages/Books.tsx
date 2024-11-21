import styled from 'styled-components';
import { useBooks } from '@/hooks/useBooks';
import Title from '@/components/common/Title';
import Loading from '@/components/common/Loading';
import BooksList from '@/components/books/BooksList';
import BooksEmpty from '@/components/books/BooksEmpty';
import Pagination from '@/components/books/Pagination';
import BooksFilter from '@/components/books/BooksFilter';
import BooksViewSwitcher from '@/components/books/BooksViewSwitcher';
import { useBooksInfinite } from '@/hooks/useBooksInfinite';
import Button from '@/components/common/Button';
import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

function Books() {
  // 도서 목록 (일반)
  // const { books, pagination, isEmpty, isBooksLoading } = useBooks();
  // 도서 목록 (무한 스크롤)
  const { books, pagination, isEmpty, isBooksLoading, fetchNextPage, hasNextPage } = useBooksInfinite();

  const moreRef = useRef(null);

  // const moreRef = useIntersectionObserver(([entry]) => {
  //   if (entry.isIntersecting) {
  //     loadMore();
  //   }
  // })

  const loadMore = () => {
    if (!hasNextPage) return;
    fetchNextPage();
  }
  
  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("next page");
          loadMore();
          observer.unobserve(entry.target);
        }
      })
    })

    if (moreRef.current) {
      observer.observe(moreRef.current);
    }

    return () => observer.disconnect();
  }, [books, moreRef]);

  // 데이터 없음
  if (isEmpty) {
    return <BooksEmpty />
  }
  // 로딩중
  if (!books || !pagination || isBooksLoading) {
    return <Loading />
  }

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>

        { books && <BooksList books={books} /> }
        {/* 일반 */}
        {/* { pagination && <Pagination pagination={pagination} />} */}
        {/* 무한 스크롤 */}
        <div className="more" ref={moreRef}>
          <Button 
            size="medium" 
            scheme="normal" 
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage}
          >
            {hasNextPage ? "더보기" : "마지막 페이지"}
          </Button>
        </div>
      </BooksStyle>
    </>
  )
}

const BooksStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`;

export default Books;