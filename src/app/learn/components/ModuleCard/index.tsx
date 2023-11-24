"use client";

import { Module } from "@/types";

const ModuleCard = ({ module }: { module: Module }) => {
  return <div>{module.title}</div>;
};

export default ModuleCard;
