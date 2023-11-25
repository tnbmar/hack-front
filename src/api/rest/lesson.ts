import { Lesson } from "@/types";
import httpClient from "../httpClient";

export const getLesson = (moduleId: number, token: string) =>
  httpClient<Lesson[]>({
    url: `/lessons/${moduleId}`,
    method: "GET",
    headers: { Authorization: token },
  });

export const getLessons = (moduleId: number, token?: string) =>
  httpClient<Lesson[]>({
    url: `/lessons-on-module/${moduleId}`,
    method: "GET",
    headers: { Authorization: token },
  });
