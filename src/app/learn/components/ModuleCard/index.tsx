"use client";

import { Module } from "@/types";
import { ModuleCardTemplate } from "./ModuleCard.styled";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import * as Progress from "@radix-ui/react-progress";
import React from "react";

import s from "./progres.module.css";
import { useRouter } from "next/navigation";
import PAGES from "@/constants/pages";

const ModuleCard = ({ module }: { module: Module }) => {
  const [progress, setProgress] = React.useState(13);

  const router = useRouter();

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    router.push(PAGES.MODULE(module.id));
  };

  return (
    <ModuleCardTemplate direction={"column"} gap={"3"}>
      <Heading>{module.name}</Heading>

      <Flex align={"center"} gap={"3"}>
        <Progress.Root className={s.progressbar} value={progress}>
          <Progress.Indicator
            className={s.progressbar__indicator}
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>

        <Text>
          0/8
          {/* {module.answered_count}/{module.question_count} */}
        </Text>
      </Flex>

      <Flex align={"center"} gap={"3"}>
        <Button onClick={handleClick}>Продолжить</Button>
        <Button>Материалы для изучения</Button>
      </Flex>
    </ModuleCardTemplate>
  );
};

export default ModuleCard;
