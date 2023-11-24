import { Subject } from "@/types";
import { ImageContainer, InfoWrapper, SubjectCardWrapper } from "./SubjectCard.styled";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

type Props = {
  subject: Subject;
};

const SubjectCard = ({ subject }: Props) => {
  return (
    <SubjectCardWrapper>
      <Flex direction={"column"} style={{ height: "100%" }}>
        <ImageContainer>
          <Image src={subject.bgImage} alt={subject.title} fill />
        </ImageContainer>
        <InfoWrapper direction={"column"}>
          <Flex direction={"column"} gap={"1"}>
            <Heading>{subject.title}</Heading>
            <Text>{subject.description}</Text>
          </Flex>
          <Button>Начать обучение</Button>
        </InfoWrapper>
      </Flex>
    </SubjectCardWrapper>
  );
};

export default SubjectCard;
