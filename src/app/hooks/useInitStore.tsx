import { create } from "zustand";

type InitStore = {
  isInit: boolean;
  setIsInit: (isInit: boolean) => void;
};

const useInitStore = create<InitStore>((set) => ({
  isInit: true,
  setIsInit: (isInit: boolean) => set({ isInit }),
}));

export default useInitStore;
