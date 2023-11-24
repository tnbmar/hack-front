"use client";

import * as Progress from "@radix-ui/react-progress";
import CodeQuestion from "../../components/CodeQuestion";
import { useEffect, useMemo, useState } from "react";

import s from "./lesson.module.css";
import WordDrop from "../../components/LanguageQuestion";
import { Flex } from "@radix-ui/themes";
import TrueAnswer from "../../components/TrueAnswer";
import { getTasks } from "@/api";
import { useParams } from "next/navigation";
import { Task } from "@/types";

const QUESTIONS_MOCK = [
  { value: "console.log(1)", type: "code" },
  { value: "Заполни конец", type: "lang" },
  { value: "Заполни конец", type: "select" },
];

const LessonPage = () => {
  const params = useParams();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(2);

  const currentQuestion = useMemo(
    () => QUESTIONS_MOCK[currentQuestionIndex],
    [currentQuestionIndex]
  );

  useEffect(() => {
    const lessonId = params.id;
    getTasks(lessonId as string).then((data) => setTasks(data));
  }, []);

  return (
    <Flex style={{ height: "100%" }} direction={"column"} gap={"3"}>
      <Progress.Root className={s.progressbar} value={10}>
        <Progress.Indicator
          className={s.progressbar__indicator}
          style={{ transform: `translateX(-${100 - 10}%)` }}
        />
      </Progress.Root>

      {currentQuestion.type === "code" ? (
        <CodeQuestion />
      ) : currentQuestion.type === "lang" ? (
        <WordDrop
          string={currentQuestion.value}
          correctWord="asd"
          options={["фыв ф", "ыыыыы"]}
        />
      ) : currentQuestion.type === "select" ? (
        <TrueAnswer
          question="Сколько  сантиметров в дециметре?"
          options={["asdasd", "asdasda", "asdasdasdasd"]}
        />
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default LessonPage;
