import { create } from "zustand";

type ModalStore = {
  isModalOpen: boolean;
  modalContent: JSX.Element;
  openModal: () => void;
  closeModal: () => void;
  setModalContent: (content: JSX.Element) => void;
};

const useModalStore = create<ModalStore>()((set) => ({
  isModalOpen: false,
  modalContent: <></>,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setModalContent: (content) => set({ modalContent: content }),
}));

export default useModalStore;

type IdStore = {
  dayId: string;
  sectionId: string;
  setDayId: (props: string) => void;
  setSectionId: (props: string) => void;
};

export const useIdStore = create<IdStore>()((set) => ({
  dayId: "1",
  sectionId: "seongho",
  setDayId: (dayId: string) => set({ dayId }),
  setSectionId: (sectionId: string) => set({ sectionId }),
}));
