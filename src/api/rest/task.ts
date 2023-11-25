import { Task } from "@/types";
import httpClient from "../httpClient";

export const getTasks = async (lessonId: string) => {
  const { data } = await httpClient<Task[]>({ url: `/tasks-on-lesson/${lessonId}` });
  return data;
};

export const checkAnswer = async (dto: { task_id: number; answer_id: number }) => {
  const response = await httpClient({ url: "/check-answer", method: "POST", data: dto });
};
