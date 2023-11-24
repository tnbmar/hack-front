import { NextPage } from "next";
import { Module } from "@/types";
import ModuleCard from "../../components/ModuleCard";

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
    title: "Модуль 1. Старт в уверенное будущее",
  },
  {
    id: 3,
    answered_count: 1,
    question_count: 8,
    title: "Модуль 1. Старт в уверенное будущее",
  },
];

const Modules: NextPage = () => {
  return (
    <div>
      {MODULES_MOCK.map((module) => (
        <ModuleCard key={module.id} module={module} />
      ))}
    </div>
  );
};

export default Modules;
