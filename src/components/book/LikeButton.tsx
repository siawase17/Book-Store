import styled from 'styled-components';
import { BookDetail } from '../../models/book.model'
import Button from '../common/Button';
import { FaHeart } from 'react-icons/fa';

interface Props {
    book: BookDetail;
    onClick: () => void;
};

const LikeButton = ({ book, onClick }: Props) => {
    console.log(book)
    return (
        <LikeButtonStyle
            size='small'
            scheme={book.is_liked ? 'like' : 'normal'}
            onClick={onClick}
        >
            <FaHeart />
            {book.likes}
        </LikeButtonStyle>
    )
};

const LikeButtonStyle = styled(Button)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding-left: 15px;
    padding-right: 15px;

    svg {
        margin-bottom: 8px;
        margin-top: 2px;
    }
`;

export default LikeButton