import { useEffect, useState } from "react";
import { BookDetail } from "../models/book.model";
import { fetchBook, likeBook, removeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";

export const useBook = (bookId: string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null);

    useEffect(() => {
        if (!bookId) return;

        fetchBook(bookId).then((book) => {
            setBook(book);
        })
    }, [bookId]);

    const { isLoggedIn } = useAuthStore();
    const { showAlert } = useAlert();
    const likeToggle = () => {
        if (!isLoggedIn) {
            showAlert('로그인이 필요합니다.');
            return;
        }
        if (!book) return;

        if (book.is_liked) {
            removeBook(book.id).then(() => {
                setBook({
                    ...book,
                    is_liked: false,
                    likes: book.likes - 1,
                });
            })
        } else {
            likeBook(book.id).then(() => {
                setBook({
                    ...book,
                    is_liked: true,
                    likes: book.likes + 1,
                });
            });
        };
    };

    return { book, likeToggle };
};