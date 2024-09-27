import { create } from 'zustand';

const useModalStore = create((set) => ({
    isSuccessModalOpen: false,
    openSuccessModal: () => set({ isSuccessModalOpen: true }),
    closeSuccessModal: () => set({ isSuccessModalOpen: false }),

    isFeedBackFormOpen: false,
    openFeedBackForm: () => set({ isFeedBackFormOpen: true }),
    closeFeedBackForm: () => set({ isFeedBackFormOpen: false })
}));

export default useModalStore;
