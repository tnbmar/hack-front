import { Task } from "@/types";
import httpClient from "../httpClient";

export const getTasks = async (lessonId: string) => {
  const { data } = await httpClient<Task[]>({ url: `/tasks/${lessonId}` });
  return data;
};
