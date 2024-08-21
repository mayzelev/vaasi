import { create } from "zustand";

const useStore = create((set) => ({
  selectedLanguage: '',
  setSelectedLanguage: (language) => set({ selectedLanguage: language }),
}));

export default useStore;