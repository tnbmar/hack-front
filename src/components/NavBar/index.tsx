import PAGES from "@/constants/pages";
import { Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import { NavLayout } from "./NavBar.styled";

const NavBar = () => {
  return (
    <NavLayout>
      <Flex direction={"column"} gap={"3"}>
        <Heading size={"5"}>TNBMAR</Heading>
        <Link href={PAGES.LEARN}>Обучение</Link>
        <Link href={PAGES.PROFILE}>Профиль</Link>
      </Flex>
    </NavLayout>
  );
};

export default NavBar;
