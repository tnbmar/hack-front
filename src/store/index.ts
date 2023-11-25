import { FullUser, User } from "@/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AppStore = {
  user: FullUser | null;

  setUser: (user: FullUser) => void;
};

export const useAppStore = create<AppStore>()(
  devtools((set, get) => ({
    user: null,

    setUser(user: FullUser) {
      set({ user: user });
    },
  }))
);
