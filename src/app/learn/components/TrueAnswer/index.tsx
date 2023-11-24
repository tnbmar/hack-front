"use client";

import { Button, Flex, Text } from "@radix-ui/themes";

type Props = {
  options: string[];
  question: string;
};

const TrueAnswer = ({ options, question }: Props) => {
  return (
    <Flex direction={"column"}>
      <Text>Выбери правильный ответ</Text>
      <Text>{question}</Text>
      <Flex direction={"column"} gap={"2"}>
        {options.map((option, i) => (
          <Button key={i}>
            {i + 1} {option}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default TrueAnswer;
