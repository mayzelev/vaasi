import { create } from 'zustand';

const useUserStore = create((set) => ({
    userData: {
        token: null,
        userId: null,
        username: null,
        contact: null,
        phone: null,
        email: null,
        code: null,
        balance: null,
        active: false,
        roleRoleId: 0
    },
    setUserInfo: (data) => {
        set((state) => ({
            userData: {
                ...state.data,
                ...data
            }
        }));
    }
}));
export default useUserStore;
