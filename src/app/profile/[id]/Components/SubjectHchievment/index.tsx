"use client";

import { Subject } from "@/types";
import Image from "next/image";
import * as Progress from "@radix-ui/react-progress";
import { useRouter } from "next/navigation";

type Props = {
  subject: Subject;
};

const SubjectCard = ({ subject }: Props) => {
  const router = useRouter();

  return <></>;
};

export default SubjectCard;
