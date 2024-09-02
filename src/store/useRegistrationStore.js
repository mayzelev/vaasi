import { create } from 'zustand';

const useRegistrationStore = create((set) => ({
    isRegistrationOpen: false,
    initialTab: 0,
    openRegistration: (config) => set({ isRegistrationOpen: true, initialTab: config.initialTab || 0 }),
    closeRegistration: () => set({ isRegistrationOpen: false, initialTab: 0 })
}));

export default useRegistrationStore;
