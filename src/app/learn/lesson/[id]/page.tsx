"use client";

import * as Progress from "@radix-ui/react-progress";
import CodeQuestion from "../../components/CodeQuestion";
import { useMemo, useState } from "react";

import s from "./lesson.module.css";
import WordDrop from "../../components/LanguageQuestion";
import { Flex } from "@radix-ui/themes";

const QUESTIONS_MOCK = [
  { value: "console.log(1)", type: "code" },
  { value: "Заполни конец", type: "lang" },
];

const LessonPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);

  const currentQuestion = useMemo(
    () => QUESTIONS_MOCK[currentQuestionIndex],
    [currentQuestionIndex]
  );

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
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default LessonPage;
