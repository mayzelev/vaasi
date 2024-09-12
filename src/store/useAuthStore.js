import { create } from 'zustand';

export const TOKEN_KEY = 'token';
export const USER_ID = 'userId';

const useAuthStore = create((set) => ({
    isRegistrationOpen: false,
    initialTab: 0,
    openRegistration: (config) => set({ isRegistrationOpen: true, initialTab: config.initialTab || 0 }),
    closeRegistration: () => set({ isRegistrationOpen: false, initialTab: 0 }),

    IsLoginOpen: false,
    initialTabLogin: 0,
    openLogin: (config) => set({ IsLoginOpen: true, initialTabLogin: config.initialTabLogin || 0 }),
    closeLogin: () => set({ IsLoginOpen: false, initialTabLogin: 0 }),

    isAuthorized: !!localStorage.getItem(TOKEN_KEY),
    setToken: (token, userId) => {
        set({ isAuthorized: true, userId });
        localStorage.setItem(USER_ID, userId);
        localStorage.setItem(TOKEN_KEY, token);
    },

    logout: () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_ID);
        set({ isAuthorized: false });
    }
}));

export default useAuthStore;
