"use client";

import { Lesson } from "@/types";
import { LessonCard, OrderNumber, TextWrapper } from "./LessonCard.styled";
import { Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import PAGES from "@/constants/pages";
import { useEffect, useState } from "react";
import { getTasks } from "@/api";
import { useUser } from "@/providers/AuthProvider";

type LeassonCardProps = {
  lesson: Lesson;
  counter: number;
};

const LeassonCard = ({ lesson, counter }: LeassonCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(PAGES.LESSON(lesson.id));
  };

  const [tasksLength, setTasksLength] = useState(0);
  const { user } = useUser();

  useEffect(() => {
    lesson.id && getTasks(String(lesson.id)).then((data) => setTasksLength(data.length));
  }, []);

  return (
    <LessonCard onClick={handleClick}>
      <OrderNumber>{counter}</OrderNumber>

      <TextWrapper direction={"column"}>
        <Text size={"7"} weight={"bold"}>
          {lesson.name}
        </Text>
        <Text>
          Ваш результат:
          {user?.user.answeredTasks.filter((elem) => elem.lesson_id === lesson.id).length}
          /{tasksLength}
        </Text>
      </TextWrapper>
    </LessonCard>
  );
};

export default LeassonCard;
