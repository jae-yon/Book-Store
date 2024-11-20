import styled from 'styled-components';
import { useBooks } from '@/hooks/useBooks';
import Title from '@/components/common/Title';
import Loading from '@/components/common/Loading';
import BooksList from '@/components/books/BooksList';
import BooksEmpty from '@/components/books/BooksEmpty';
import Pagination from '@/components/books/Pagination';
import BooksFilter from '@/components/books/BooksFilter';
import BooksViewSwitcher from '@/components/books/BooksViewSwitcher';

function Books() {

  const { books, pagination, isEmpty, isBooksLoading } = useBooks();

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
        { pagination && <Pagination pagination={pagination} />}
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