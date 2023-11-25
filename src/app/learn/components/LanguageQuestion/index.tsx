"use client";

import { checkAnswer } from "@/api";
import { Answer } from "@/types";
import { Button, Flex, Text } from "@radix-ui/themes";
import React, { useState } from "react";
import styled from "styled-components";

interface LanguageQuestionProps {
  correctWord: string;
  options: Answer[];
  string: string;
  taskId: string;
  onSuccess: () => void;
}

const WordBtn = styled.div`
  padding: 8px 12px;
  border-radius: 4px;
  cursor: grab;
  box-shadow: 1px 1px 5px #00000020;
`;

const EmptyWordBox = styled(WordBtn)`
  cursor: alias;
  min-width: 50px;
  min-height: 25px;
`;

const LanguageQuestion: React.FC<LanguageQuestionProps> = ({
  correctWord,
  options,
  string,
  taskId,
  onSuccess,
}) => {
  const [draggedWord, setDraggedWord] = useState<Answer | null>(null);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, word: Answer) => {
    event.dataTransfer.setData("text/plain", word.content);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedWord = event.dataTransfer.getData("text/plain");
    const selectedWord = options.find((option) => {
      return option.content === droppedWord;
    });
    selectedWord && setDraggedWord(selectedWord);

    if (droppedWord && droppedWord !== correctWord) {
      const slot = document.getElementById("slot-for-text");
      if (slot) {
        slot.textContent = droppedWord;
      }
    }
  };

  const handleSubmit = async () => {
    if (!draggedWord?.id) return;

    try {
      await checkAnswer({
        answer_id: draggedWord?.id,
        task_id: +taskId,
      });
      onSuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Flex direction={"column"} gap={"3"}>
      <Flex
        direction={"column"}
        gap={"3"}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Flex gap={"1"} align={"center"}>
          <Text>{string}</Text> <EmptyWordBox id="slot-for-text"></EmptyWordBox>
        </Flex>

        <Flex align={"center"} gap={"2"}>
          {options.map((option, index) => (
            <WordBtn
              key={index}
              draggable
              onDragStart={(event) => handleDragStart(event, option)}
            >
              {option.content}
            </WordBtn>
          ))}
        </Flex>
      </Flex>

      <Button onClick={handleSubmit}>Подтвердить</Button>
    </Flex>
  );
};

export default LanguageQuestion;
