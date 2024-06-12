import Title from '../components/common/Title'
import styled from 'styled-components';
import BooksFilter from '../components/books/BooksFilter';
import BooksViewSwitcher from '../components/books/BooksViewSwitcher';
import BooksList from '../components/books/BooksList';
import BooksEmpty from '../components/books/BooksEmpty';
import Pagination from '../components/books/Pagination';
import { useBooks } from '../hooks/useBooks';

const Books = () => {
    const { books, pagination, isEmpty } = useBooks();

    return (
        <>
            <Title size='large'>도서 검색 결과</Title>
            <BookStyle>
                <BooksFilter />
                <BooksViewSwitcher />
                {!isEmpty && <BooksList books={books} />}
                {isEmpty && <BooksEmpty />}
                {!isEmpty && <Pagination />}
            </BookStyle>
        </>
    )
};

const BookStyle = styled.div`
    
`;

export default Books;