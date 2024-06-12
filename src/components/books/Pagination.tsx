import React from 'react'
import { Pagination as IPagination } from '../../models/pagination.model';
import { LIMIT } from '../../constants/pagination';
import Button from '../common/Button';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { QUERYSTRING } from '../../constants/querystring';

interface Props {
    pagination: IPagination;
}

const Pagination = ({ pagination }: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { totalBook_cnt, cur_page } = pagination;
    const pages: number = Math.ceil(totalBook_cnt / LIMIT);

    const handleClickPage = (page: number) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set(QUERYSTRING.PAGE, page.toString());
        setSearchParams(newSearchParams);
    }

    return (
        <PaginationStyle>
            {pages > 0 && (
                <ol>
                    {Array(pages).fill(0).map((_, index) => (
                        <li key={index}>
                            <Button
                                size='small'
                                scheme={index + 1 === cur_page ? 'primary' : 'normal'}
                                onClick={() => handleClickPage(index + 1)}
                            >
                                {index + 1}
                            </Button>
                        </li>
                    ))}
                </ol>
            )}
        </PaginationStyle>
    )
};

const PaginationStyle = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 24px 0;

    ol {
        list-style: none;
        display: flex;
        gap: 8px;
        padding: 0;
        margin: 0;
    }
`;

export default Pagination;