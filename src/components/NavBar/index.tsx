"use client";

import PAGES from "@/constants/pages";
import { Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import { NavLayout } from "./NavBar.styled";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  // if (pathname === "/auth") return null;

  return (
    <NavLayout>
      <Flex direction={"column"} gap={"3"}>
        <Heading size={"5"}>TNBMAR</Heading>
        <Link href={PAGES.LEARN}>Обучение</Link>
        <Link href={PAGES.PROFILE(1)}>Профиль</Link>
      </Flex>
    </NavLayout>
  );
};

export default NavBar;
