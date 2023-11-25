"use client";

import { ProfileSubject, Subject } from "@/types";
import {
  ImageContainer,
  InfoWrapper,
  StyledButton,
  SubjectCardWrapper,
} from "./SubjectCard.styled";
import { Heading } from "@radix-ui/themes";
import Image from "next/image";
import * as Progress from "@radix-ui/react-progress";
import s from "./progres.module.css";
import { useRouter } from "next/navigation";
import PAGES from "@/constants/pages";
import { useState } from "react";

type Props = {
  subject: Subject;
};

const SubjectCard = ({ subject }: Props) => {
  const [progress, setProgress] = useState(13);
  const router = useRouter();

  return (
    <SubjectCardWrapper direction={"row"}>
      <ImageContainer>
        <Image src={subject.image} alt={subject.name} fill />
      </ImageContainer>
      <InfoWrapper>
        <Heading>{subject.name}</Heading>
        <Progress.Root className={s.progressbar} value={progress}>
          <Progress.Indicator
            className={s.progressbar__indicator}
            style={{ width: `${100 - progress}%` }}
          />
        </Progress.Root>
        <StyledButton onClick={() => router.push(PAGES.SUBJECT(subject.id))}>
          Начать обучение
        </StyledButton>
      </InfoWrapper>
    </SubjectCardWrapper>
  );
};

export default SubjectCard;
