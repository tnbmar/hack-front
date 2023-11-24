"use client";

import { Button, Flex, Text } from "@radix-ui/themes";
import React, { useState } from "react";
import styled from "styled-components";

interface LanguageQuestionProps {
  correctWord: string;
  options: string[];
  string: string;
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
}) => {
  const [draggedWord, setDraggedWord] = useState<string | null>(null);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, word: string) => {
    event.dataTransfer.setData("text/plain", word);
    setDraggedWord(word);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedWord = event.dataTransfer.getData("text/plain");
    setDraggedWord(null);

    // Проверяем, что слово не было перетащено в слот ранее и что это не пустое слово
    if (droppedWord && droppedWord !== correctWord) {
      const slot = document.getElementById("slot-for-text");
      if (slot) {
        slot.textContent = droppedWord;
      }
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
              {option}
            </WordBtn>
          ))}
        </Flex>
      </Flex>

      <Button>Подтвердить</Button>
    </Flex>
  );
};

export default LanguageQuestion;
