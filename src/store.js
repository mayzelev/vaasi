import { create } from "zustand";

const useStore = create((set) => ({
  selectedLanguage: '',
  setSelectedLanguage: (language) => set({ selectedLanguage: language }),

  isRegistrationOpen: false,
  openRegistration: () => set({ isRegistrationOpen: true }),
  closeRegistration: () => set({ isRegistrationOpen: false }),

  isSuccessModalOpen: false,
  openSuccessModal: () => set({ isSuccessModalOpen: true }),
  closeSuccessModal: () => set({ isSuccessModalOpen: false }),
}));

export default useStore;