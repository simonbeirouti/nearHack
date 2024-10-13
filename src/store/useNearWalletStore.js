import { create } from 'zustand';
import { invoke } from '@tauri-apps/api/tauri';

const useNearWalletStore = create((set) => ({
  accountId: null,
  publicKey: null,
  isLoading: false,
  error: null,

  login: async (accountId) => {
    set({ isLoading: true, error: null });
    try {
      const result = await invoke('near_login', { accountId });
      const { account_id, public_key } = JSON.parse(result);
      set({ accountId: account_id, publicKey: public_key, isLoading: false });
    } catch (error) {
      set({ error: error.toString(), isLoading: false });
    }
  },

  logout: () => {
    set({ accountId: null, publicKey: null });
  },
}));

export default useNearWalletStore;
