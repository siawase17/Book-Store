import { Cart } from "../models/cart.model";
import { httpClient } from "./http";

interface AddCartParams {
    book_id: number;
    quantity: number;
};

export const addCart = async (params: AddCartParams) => {
    try {
        const response = await httpClient.post('/cart', params);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error(`Request failed with status code ${error.response.status}`);
            console.error(error.response.data);
        } else {
            console.error(error.message);
        }
        throw error;
    }
};

export const fetchCart = async () => {
    const response = await httpClient.get<Cart[]>('/cart');
    return response.data;
};

export const deleteCart = async (cartId: number) => {
    const response = await httpClient.delete(`/cart/${cartId}`);
    return response.data;
};