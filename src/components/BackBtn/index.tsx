"use client";

import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();

  return <button onClick={() => router.back()}>Назад</button>;
};

export default BackBtn;
