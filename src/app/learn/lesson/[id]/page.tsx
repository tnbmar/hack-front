"use client";

import CodeQuestion from "../../components/CodeQuestion";
import { useMemo, useState } from "react";

const QUESTIONS_MOCK = [{ value: "console.log(1)", type: "code" }];

const LessonPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = useMemo(
    () => QUESTIONS_MOCK[currentQuestionIndex],
    [currentQuestionIndex]
  );

  return (
    <div style={{ height: "100%" }}>
      {currentQuestion.type === "code" ? <CodeQuestion /> : <></>}
    </div>
  );
};

export default LessonPage;
