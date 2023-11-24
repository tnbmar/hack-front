"use client";

import { Subject } from "@/types";
import { ImageContainer, InfoWrapper, SubjectCardWrapper } from "./SubjectCard.styled";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PAGES from "@/constants/pages";

type Props = {
  subject: Subject;
};

const SubjectCard = ({ subject }: Props) => {
  const router = useRouter();

  return (
    <SubjectCardWrapper direction={"column"}>
      <ImageContainer>
        <Image src={subject.bgImage} alt={subject.title} fill />
      </ImageContainer>
      <InfoWrapper direction={"column"}>
        <Flex direction={"column"} gap={"1"}>
          <Heading>{subject.title}</Heading>
          <Text>{subject.description}</Text>
        </Flex>
        <Button onClick={() => router.push(PAGES.SUBJECT(subject.id))}>
          Начать обучение
        </Button>
      </InfoWrapper>
    </SubjectCardWrapper>
  );
};

export default SubjectCard;
