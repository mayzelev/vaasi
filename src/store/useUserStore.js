import { create } from 'zustand';

const useUserStore = create((set) => ({
    userId: null,
    username: null,
    email: null,
    balance: null,
    setUserInfo: (data) => {
        set({
            userId: data.userId,
            username: data.username,
            phone: data.phone,
            email: data.email,
            balance: data.balance
        });
    }
}));

export default useUserStore;
