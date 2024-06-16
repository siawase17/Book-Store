import { useEffect, useState } from "react";
import { BookDetail } from "../models/book.model";
import { fetchBook, likeBook, removeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { addCart } from "../api/cart.api";

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

    const [cartAdded, setCartAdded] = useState<boolean>(false);
    const addToCart = (quantity: number) => {
        if (!book) return;

        addCart({ book_id: book.id, quantity: quantity }).then(() => {
            setCartAdded(true);
            setTimeout(() => {
                setCartAdded(false)
            }, 5000)
        });
    };

    return { book, likeToggle, addToCart, cartAdded };
};