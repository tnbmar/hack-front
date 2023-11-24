import { Lesson } from "@/types";
import httpClient from "../httpClient";

export const getLessons = (moduleId: number, token: string) =>
  httpClient<Lesson[]>({
    url: `/lessons/${moduleId}`,
    method: "GET",
    headers: { Authorization: token },
  });
