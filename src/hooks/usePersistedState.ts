import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";
import { Item, DynamicPayload } from "@/types";

interface MyStoreState {
  payload: DynamicPayload[]; // Define payload as an array
  setPayload: (newPayload: DynamicPayload) => void;
  addItem: (item: Item) => void;
  updatePayload: (index: number, key: string, value: any) => void;
  clearPayload: () => void;
}

const localStorageProvider: PersistStorage<any> = {
  getItem: (name) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : [];
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
};

export const usePersistedState = create<MyStoreState>()(
  persist(
    (set) => ({
      payload: [], // Initialize as an empty array
      setPayload: (newPayload: DynamicPayload) => set((state) => ({ payload: [...state.payload, newPayload] })),
      addItem: (item: Item) =>
        set((state) => ({
          payload: state.payload.map((payloadItem) => ({
            ...payloadItem,
            items: payloadItem.items ? [...payloadItem.items, item] : [item],
          })),
        })),
      updatePayload: (index: number, key: string, value: any) =>
        set((state) => ({
          payload: state.payload.map((payloadItem, i) => (i === index ? { ...payloadItem, [key]: value } : payloadItem)),
        })),
      clearPayload: () => set({ payload: [] }),
    }),
    {
      name: "payload",
      storage: localStorageProvider,
    }
  )
);
