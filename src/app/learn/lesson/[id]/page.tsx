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

const LessonPage = () => {
  const params = useParams();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = useMemo(
    () => tasks[currentQuestionIndex] ?? null,
    [currentQuestionIndex, tasks]
  );

  useEffect(() => {
    const lessonId = params.id;
    getTasks(lessonId as string).then((data) => setTasks(data));
  }, []);

  const handleSuccess = () => {
    setCurrentQuestionIndex((i) => i + 1);
  };

  return (
    <Flex style={{ height: "100%" }} direction={"column"} gap={"3"}>
      <Progress.Root className={s.progressbar} value={10}>
        <Progress.Indicator
          className={s.progressbar__indicator}
          style={{ transform: `translateX(-${100 - 10}%)` }}
        />
      </Progress.Root>

      {currentQuestion && currentQuestion?.type === "CODE" ? (
        <CodeQuestion codeString={currentQuestion.content} onSuccess={handleSuccess} />
      ) : currentQuestion?.type === "DRAGABLE" ? (
        <WordDrop
          string={currentQuestion.content}
          correctWord={"asd"}
          options={currentQuestion.answers}
          onSuccess={handleSuccess}
          taskId={params.id as string}
        />
      ) : currentQuestion?.type === "DEFAULT" ? (
        <TrueAnswer
          question={currentQuestion.content}
          options={currentQuestion.answers}
          onSuccess={handleSuccess}
        />
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default LessonPage;
