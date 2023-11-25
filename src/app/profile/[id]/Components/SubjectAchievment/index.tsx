"use client";

import { Achievment, MyAchievment } from "@/types";
import Image from "next/image";
import * as Progress from "@radix-ui/react-progress";
import { useRouter } from "next/navigation";
import {
  AchieveBlock,
  AchieveContainer,
  AchieveImageBLock,
  SubTitle,
  Title,
} from "./SubjectAvhievment.styled";

type Props = {
  subject: Achievment;
  myRewards: MyAchievment[];
};

const SubjectAchievment = ({ subject, myRewards }: Props) => {
  const router = useRouter();

  return (
    <>
      <AchieveContainer>
        <AchieveBlock>
          <AchieveImageBLock
            status={!!myRewards.find((elem) => elem.name === subject.name)}
          >
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
