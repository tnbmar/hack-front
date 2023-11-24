import { NextPage } from "next";
import ModuleCard from "../components/ModuleCard";
import { Module } from "@/types";

const MODULES_MOCK: Module[] = [
  {
    id: 1,
    answered_count: 1,
    question_count: 8,
    title: "Модуль 1. Старт в уверенное будущее",
  },
  {
    id: 2,
    answered_count: 1,
    question_count: 8,
    title: "Модуль 2. От первых шагов к свободному общению",
  },
  {
    id: 3,
    answered_count: 1,
    question_count: 8,
    title: "Модуль 3. Новые возможности",
  },
];

const Modules: NextPage = () => {
  return (
    <div>
      123
      {MODULES_MOCK.map((module) => (
        <ModuleCard key={module.id} module={module} />
      ))}
    </div>
  );
};

export default Modules;
