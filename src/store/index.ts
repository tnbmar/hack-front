import { User } from "@/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AppStore = {
  user: User | null;

  setUser: (user: User) => void;
};

export const useAppStore = create<AppStore>()(
  devtools((set, get) => ({
    user: null,

    setUser(user: User) {
      set({ user: user });
    },
  }))
);
