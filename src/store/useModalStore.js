import { create } from 'zustand';

const useModalStore = create((set) => ({
    isSuccessModalOpen: false,
    openSuccessModal: () => set({ isSuccessModalOpen: true }),
    closeSuccessModal: () => set({ isSuccessModalOpen: false }),

    isFeedBackFormOpen: false,
    openFeedBackForm: () => set({ isFeedBackFormOpen: true }),
    closeFeedBackForm: () => set({ isFeedBackFormOpen: false }),

    isSessionExpiredOpen: false,
    openSessionExpired: () => set({ isSessionExpiredOpen: true }),
    closeSessionExpired: () => set({ isSessionExpiredOpen: false })
}));

export default useModalStore;
