import PAGES from "@/constants/pages";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(PAGES.LEARN);
}
