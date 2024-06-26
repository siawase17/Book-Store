import { Book } from "@/models/book.model"
import BookItem from "../books/BookItem";
import styled from "styled-components";

interface Props {
    books: Book[];
};

const MainNewBooks = ({ books }: Props) => {
    return (
        <MainNewBooksStyle>
            {books.map((book) => (
                <BookItem key={book.id} book={book} view="grid" />
            ))}
        </MainNewBooksStyle>
    )
};

const MainNewBooksStyle = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
`

export default MainNewBooks;