import { create } from 'zustand';

export const TOKEN_KEY = 'token';

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
    setToken: (token) => {
        set({ isAuthorized: true });
        localStorage.setItem(TOKEN_KEY, token);
    },

    logout: () => {
        localStorage.removeItem(TOKEN_KEY);
        set({ isAuthorized: false });
    }
}));

export default useAuthStore;
