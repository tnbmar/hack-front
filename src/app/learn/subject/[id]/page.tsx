import { NextPage } from "next";
import { Module } from "@/types";
import ModuleCard from "../../components/ModuleCard";
import { Flex } from "@radix-ui/themes";

const MODULES_MOCK: Module[] = [
  {
    id: 1,
    answered_count: 1,
    question_count: 8,
    title: "Модуль 1. Старт в уверенное будущее",
  },
  {
    id: 2,
    answered_count: 1,
    question_count: 8,
    title: "Модуль 2. Старт в уверенное будущее",
  },
  {
    id: 3,
    answered_count: 1,
    question_count: 8,
    title: "Модуль 3. Старт в уверенное будущее",
  },
];

const Modules: NextPage = () => {
  return (
    <>
      <Flex direction={"column"} gap={"3"}>
        {MODULES_MOCK.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </Flex>
    </>
  );
};

export default Modules;
