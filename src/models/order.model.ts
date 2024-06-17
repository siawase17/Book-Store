export interface Order {
    id: number;
    created_at: string;
    address: string;
    receiver: string;
    contact: string;
    book_title: string;
    total_quantity: number;
    total_price: number;
};

export interface OrderSheet {
    items: number[];
    total_quantity: number;
    total_price: number;
    book_title: string;
    user: Delivery;
};

export interface Delivery {
    address: string;
    receiver: string;
    contact: string;
};