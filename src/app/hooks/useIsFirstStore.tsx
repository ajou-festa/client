import { create } from "zustand";
import { persist } from "zustand/middleware";

type IsFirstStoreType = {
  isFirst: boolean;
  cameFromSection: boolean;
  setVisited: () => void;
  setCameFromSection: (value: boolean) => void;
};

// export const useIsFirstStore = create<IsFirstStoreType>()(
//   persist(
//     (set, get) => ({
//       isFirst: true,
//       cameFromSection: false,
//       setVisited: () => set({ isFirst: false }),
//       setCameFromSection: (value) => set({ cameFromSection: value }),
//     }),
//     {
//       name: "first-visit",
//     },
//   ),
// );

export const useIsFirstStore = create<IsFirstStoreType>((set) => ({
  isFirst: true,
  cameFromSection: false,
  setVisited: () => set({ isFirst: false }),
  setCameFromSection: (value) => set({ cameFromSection: value }),
}));

export default useIsFirstStore;
