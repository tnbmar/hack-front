"use client";

import { Subject } from "@/types";
import { ImageContainer, InfoWrapper, SubjectCardWrapper } from "./SubjectCard.styled";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PAGES from "@/constants/pages";
import { useUser } from "@/providers/AuthProvider";

type Props = {
  subject: Subject;
  order: number;
};

const SubjectCard = ({ subject, order }: Props) => {
  const router = useRouter();
  const user = useUser();

  return (
    <SubjectCardWrapper
      direction={"column"}
      style={{
        opacity: user.user?.user.answeredSubjects.find((elem) => elem.id === subject.id)
          ? 0.5
          : 1,
      }}
    >
      <ImageContainer>
        <Image src={subject.image} alt={subject.name} fill />
      </ImageContainer>
      <InfoWrapper direction={"column"}>
        <Flex direction={"column"} gap={"1"}>
          <Heading>{subject.name}</Heading>
          <Text>Описание</Text>
        </Flex>
        <Button onClick={() => router.push(PAGES.SUBJECT(subject.id))}>
          Начать обучение
        </Button>
      </InfoWrapper>
    </SubjectCardWrapper>
  );
};

export default SubjectCard;
