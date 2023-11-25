"use client";

import { getMyUser } from "@/api";
import { useAppStore } from "@/store";
import { PropsWithChildren, useEffect } from "react";

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const appStore = useAppStore();

  useEffect(() => {
    getMyUser().then((data) => appStore.setUser(data));
  }, []);

  return children;
};

export default AuthProvider;
