import React, { useState } from 'react'
import { BookDetail } from '../../models/book.model';
import InputText from '../common/InputText';
import Button from '../common/Button';
import styled from 'styled-components';
import { addCart } from '../../api/cart.api';
import { useAlert } from '../../hooks/useAlert';
import { Link } from 'react-router-dom';
import { useBook } from '../../hooks/useBook';

interface Props {
    book: BookDetail;
}

const AddToCart = ({ book }: Props) => {
    const [quantity, setQuantity] = useState<number>(1);
    const { addToCart, cartAdded } = useBook(book.id.toString());

    const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity === 1) return;
        setQuantity(quantity - 1);
    };

    return (
        <AddToCartStyle $added={cartAdded}>
            <div className='quantity'>
                <InputText className='inputQuantity' inputType='number' value={quantity}
                    onChange={handleQuantity} />
                <Button size='small' scheme='normal' onClick={handleDecrease}>
                    -
                </Button>
                <Button size='small' scheme='normal' onClick={handleIncrease}>
                    +
                </Button>
            </div>
            <Button size='small' scheme='primary' onClick={() => addToCart(quantity)}>
                장바구니 담기
            </Button>
            {cartAdded && (
                <div className="added">
                    <p>장바구니에 추가되었습니다.</p>
                    <StyledLink to='/cart'>장바구니 이동</StyledLink>
                </div>
            )}
        </AddToCartStyle>
    )
};

interface AddToCartStyleProps {
    $added: boolean;
};

const AddToCartStyle = styled.div<AddToCartStyleProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .quantity {
        display: flex;
        gap: 7px;
    }

    .inputQuantity {
        width: 6rem;
    }

    .added {
        position: absolute;
        right: 0;
        bottom: -90px;
        background-color: ${({ theme }) => theme.color.background};
        border-radius: ${({ theme }) => theme.borderRadius.default};
        padding: 8px 12px;
        opacity: ${({ $added }) => ($added ? '1' : '0')};
        transition: opacity 0.5s ease;

        p {
            padding: 0 0 8px 0;
            margin: 0;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: underline;
`;

export default AddToCart;