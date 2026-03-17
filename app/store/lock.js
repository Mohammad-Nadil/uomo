import { create } from "zustand";

const useLockStore = create((set, get) => ({
  lock: false,

  lockView: () => {
    const newLock = !get().lock;

    if (newLock) {
      document.body.classList.add("h-screen", "w-screen", "overflow-hidden");
    } else {
      document.body.classList.remove("h-screen", "w-screen", "overflow-hidden");
    }

    set({ lock: newLock });
  },
}));

export default useLockStore;
