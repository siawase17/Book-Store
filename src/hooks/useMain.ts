import { fetchBooks } from "@/api/books.api";
import { fetchReviewAll } from "@/api/review.api";
import { Book, BookReviewItem } from "@/models/book.model"
import { useEffect, useState } from "react"

export const useMain = () => {
    const [reviews, setReviews] = useState<BookReviewItem[]>([]);
    const [newBooks, setNewBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetchReviewAll().then((reviews) => {
            setReviews(reviews);
        });

        fetchBooks({
            category_id: undefined,
            is_new: true,
            page: 1,
            limit: 4,
        }).then(({ books }) => {
            setNewBooks(books);
        });
    }, []);

    return { reviews, newBooks };
};