"use client";

import * as Progress from "@radix-ui/react-progress";
import CodeQuestion from "../../components/CodeQuestion";
import { useEffect, useMemo, useState } from "react";

import s from "./lesson.module.css";
import WordDrop from "../../components/LanguageQuestion";
import { Flex, Text } from "@radix-ui/themes";
import TrueAnswer from "../../components/TrueAnswer";
import { getTasks } from "@/api";
import { useParams } from "next/navigation";
import { Task } from "@/types";
import { useUser } from "@/providers/AuthProvider";

const LessonPage = () => {
  const params = useParams();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [successTask, setSuccessTask] = useState(0);

  const { user } = useUser();

  const currentQuestion = useMemo(
    () => tasks[currentQuestionIndex] ?? null,
    [currentQuestionIndex, tasks]
  );

  useEffect(() => {
    const lessonId = params.id;
    getTasks(lessonId as string).then((data) => setTasks(data));
  }, []);

  const handleSuccess = () => {
    // setSuccessTask((i) => i + 1);
    setCurrentQuestionIndex((i) => i + 1);
  };

  return (
    <Flex style={{ height: "100%", padding: 20 }} direction={"column"} gap={"3"}>
      <Flex align={"center"} gap={"2"}>
        {currentQuestionIndex < tasks.length && (
          <Text>Задача {currentQuestionIndex + 1}</Text>
        )}
      </Flex>

      {currentQuestion && currentQuestion?.type === "CODE" ? (
        <CodeQuestion
          codeString={currentQuestion.content}
          key={currentQuestion.content}
          onSuccess={handleSuccess}
        />
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
      ) : currentQuestionIndex >= tasks.length ? (
        <>Вы прошли все задачи урока</>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default LessonPage;
