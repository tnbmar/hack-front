"use client";

import { Lesson } from "@/types";
import { LessonCard, OrderNumber, TextWrapper } from "./LessonCard.styled";
import { Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import PAGES from "@/constants/pages";

type LeassonCardProps = {
  lesson: Lesson;
  counter: number;
};

const LeassonCard = ({ lesson, counter }: LeassonCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(PAGES.LESSON(lesson.id));
  };

  return (
    <LessonCard onClick={handleClick}>
      <OrderNumber>{counter}</OrderNumber>

      <TextWrapper direction={"column"}>
        <Text size={"7"} weight={"bold"}>
          {lesson.name}
        </Text>
        <Text>Ваш результат: 0/0</Text>
      </TextWrapper>
    </LessonCard>
  );
};

export default LeassonCard;
