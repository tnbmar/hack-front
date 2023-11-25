"use client";

import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { getMyUser } from "@/api";
import Cookies from "js-cookie";
import COOKIES from "@/constants/cookie";
import { useRouter } from "next/navigation";
import PAGES from "@/constants/pages";
import { FullUser } from "@/types";

type UserContextType = {
  user: FullUser | null;
};

const UserContext = createContext<UserContextType>({
  user: null,
});

const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState<FullUser | null>(null);

  useEffect(() => {
    const token = Cookies.get(COOKIES.TOKEN);
    if (token) {
      getMyUser().then((data) => setUser(data));
    } else {
      router.push(PAGES.AUTH);
    }
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser должен использоваться внутри UserProvider");
  }
  return context;
};

export default AuthProvider;
