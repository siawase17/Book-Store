import { BookReviewItem as IBookReviewItem } from '@/models/book.model'
import React from 'react'
import BookReviewItem from './BookReviewItem';
import styled from 'styled-components';

interface Props {
    reviews: IBookReviewItem[];
}

const BookReview = ({ reviews }: Props) => {
    return (
        <BookReviewStyle>
            {reviews.map((review) => (
                <BookReviewItem review={review}/>
            ))}
        </BookReviewStyle>
    )
};

const BookReviewStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export default BookReview