import { create } from 'zustand';

export const TOKEN_KEY = 'token';

const useAuthStore = create((set) => ({
    isRegistrationOpen: false,
    initialTab: 0,
    openRegistration: (config) => set({ isRegistrationOpen: true, initialTab: config.initialTab || 0 }),
    closeRegistration: () => set({ isRegistrationOpen: false, initialTab: 0 }),

    IsLoginOpen: false,
    openLogin: () => set({ IsLoginOpen: true }),
    closeLogin: () => set({ IsLoginOpen: false }),

    isAuthorized: localStorage.getItem(TOKEN_KEY) || false,
    setToken: (token) => {
        set({ isAuthorized: true });
        localStorage.setItem(TOKEN_KEY, token);
    }
}));

export default useAuthStore;
