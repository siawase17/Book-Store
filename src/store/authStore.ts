import { create } from 'zustand';

interface StoreState {
    isLoggedIn: boolean;
    storeLogin: (token: string) => void;
    storeLogout: () => void;
};

export const useAuthStore = create<StoreState>((set) => ({
    isLoggedIn: false,
    storeLogin: (token) => {
        set({ isLoggedIn: true });
    },
    storeLogout: () => {
        set({ isLoggedIn: false });
    },
}))