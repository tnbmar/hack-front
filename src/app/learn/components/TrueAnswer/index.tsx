"use client";

import { checkAnswer } from "@/api";
import { Answer } from "@/types";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";

type Props = {
  options: Answer[];
  question: string;
  onSuccess: () => void;
};

const TrueAnswer = ({ options, question, onSuccess }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleSubmit = async () => {
    try {
      const taskId = options.find((option) => option.id === selectedAnswer)?.task_id;
      if (!selectedAnswer || !taskId) return;

      await checkAnswer({
        answer_id: selectedAnswer,
        task_id: taskId,
      });

      onSuccess();
    } catch {
      console.log("error");
    }
  };

  return (
    <Flex direction={"column"}>
      <Text>{question}</Text>
      <Flex direction={"column"} gap={"2"}>
        {options.map((option, i) => (
          <Text
            key={i}
            onClick={() => setSelectedAnswer(option.id)}
            style={{
              color: selectedAnswer === option.id ? "green" : "gray",
              cursor: "pointer",
            }}
          >
            {i + 1} {option.content}
          </Text>
        ))}
      </Flex>
      <Button onClick={handleSubmit}>Продолжить</Button>
    </Flex>
  );
};

export default TrueAnswer;
