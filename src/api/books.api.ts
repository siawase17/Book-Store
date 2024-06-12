import { Book } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface FetchBooksParams {
    category_id?: number;
    is_new?: boolean;
    page?: number;
    limit: number;
};

interface FetchBooksResponse {
    books: Book[];
    pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
    try {
        const response = await httpClient.get<FetchBooksResponse>('/books', { params: params });
        console.log(response.data)
        return response.data;
    } catch (error) {
        return {
            books: [],
            pagination: {
                totalBook_cnt: 0,
                cur_page: 1,
            }
        }
    };
};