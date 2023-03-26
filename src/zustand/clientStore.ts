import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ClientState {
  index: number,
  updateIndex: (idx: number) => void,
}

const useClientStore = create<ClientState>()(
    devtools(
        (set) => ({
            index: 0,
            updateIndex: (at) => set({ index: at }),
        }),
        {
            name: "client-storage",
        }
    )
);

export default useClientStore;
