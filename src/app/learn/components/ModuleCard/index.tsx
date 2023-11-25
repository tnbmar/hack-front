"use client";

import { Lesson, Module } from "@/types";
import { ModuleCardTemplate } from "./ModuleCard.styled";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import * as Progress from "@radix-ui/react-progress";
import React, { useEffect, useMemo, useState } from "react";

import s from "./progres.module.css";
import { useRouter } from "next/navigation";
import PAGES from "@/constants/pages";
import { getLessons } from "@/api";
import { useUser } from "@/providers/AuthProvider";

const ModuleCard = ({ module }: { module: Module }) => {
  const [progress, setProgress] = React.useState(13);
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    getLessons(module.id).then(({ data }) => setLessons(data));
  }, []);

  const router = useRouter();

  const { user } = useUser();

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    router.push(PAGES.MODULE(module.id));
  };

  const successValue = useMemo(() => {
    if (user) {
      // console.log(appStore.user?.answeredLessons);
      return user?.answeredLessons.length ?? 0;
    } else {
      return 0;
    }
  }, [user]);

  return (
    <ModuleCardTemplate direction={"column"} gap={"3"}>
      <Heading>{module.name}</Heading>

      <Flex align={"center"} gap={"3"}>
        <Progress.Root className={s.progressbar} value={successValue / lessons.length}>
          <Progress.Indicator
            className={s.progressbar__indicator}
            style={{ transform: `translateX(-${100 - successValue / lessons.length}%)` }}
          />
        </Progress.Root>

        <Text>
          {successValue}/{lessons.length}
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
