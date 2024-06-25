import { useLocation } from "react-router-dom"
import { fetchBooks } from "../api/books.api";
import { QUERYSTRING } from "../constants/querystring";
import { LIMIT } from "../constants/pagination";
import { useInfiniteQuery } from "react-query";

export const useBooksInfinite = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const getBooks = ({ pageParam }: { pageParam: number }) => {
        const params = new URLSearchParams(location.search);
        const category_id = params.get(QUERYSTRING.CATEGORY_ID) ?
            Number(params.get(QUERYSTRING.CATEGORY_ID)) : undefined;
        const is_new = params.get(QUERYSTRING.NEWS) ? true : undefined;
        const limit = LIMIT;
        const page = pageParam;

        return fetchBooks({
            category_id,
            is_new,
            limit,
            page
        })
    }

    const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
        ['books', location.search],
        ({ pageParam = 1 }) => getBooks({ pageParam }),
        {
            getNextPageParam: (lastPage) => {
                const isLastPage = Math.ceil
                (lastPage.pagination.totalBook_cnt / LIMIT) ===
                lastPage.pagination.cur_page;

                return isLastPage ? null : lastPage.pagination.cur_page + 1;
            }
        }
    );

    const books = data ? data.pages.flatMap((page) => page.books) : [];
    const pagination = data ? data.pages[data.pages.length - 1].pagination : {};
    const isEmpty = books.length === 0;

    return {
        books,
        pagination,
        isEmpty,
        isBooksLoading: isFetching,
        fetchNextPage,
        hasNextPage,
    };
};