import { create } from 'zustand';

interface StoreState {
    isLoggedIn: boolean;
    storeLogin: (token: string) => void;
    storeLogout: () => void;
};

const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
};

const setToken = (token: string) => {
    localStorage.setItem('token', token);
};

const removeToken = () => {
    localStorage.removeItem('token');
}

export const useAuthStore = create<StoreState>((set) => ({
    // 초기화
    isLoggedIn: getToken() ? true : false,
    // 액션
    storeLogin: (token) => {
        set({ isLoggedIn: true });
        setToken(token);
    },
    storeLogout: () => {
        set({ isLoggedIn: false });
        removeToken();
    },
}))