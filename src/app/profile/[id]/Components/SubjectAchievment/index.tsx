"use client";

import { Achievment } from "@/types";
import Image from "next/image";
import * as Progress from "@radix-ui/react-progress";
import { useRouter } from "next/navigation";
import { AchieveBlock, AchieveContainer, AchieveImageBLock, SubTitle, Title } from "./SubjectAvhievment.styled";

type Props = {
  subject: Achievment;
};

const SubjectAchievment = ({ subject }: Props) => {
  const router = useRouter();

  return (
    <>
      <AchieveContainer>
        <AchieveBlock>
          <AchieveImageBLock status={subject.status}>
            <Image src={subject.img} alt={subject.title} fill />
          </AchieveImageBLock>
          <div>
            <Title>{subject.title}</Title>
            <SubTitle>{subject.text}</SubTitle>
          </div>
        </AchieveBlock>
      </AchieveContainer>
    </>
  );
};

export default SubjectAchievment;
