import { Subject } from "@/types";
import httpClient from "../httpClient";

export const getSubjects = (authToken?: string) =>
  httpClient<{ results: Subject[] }>({
    url: "/subjects",
    method: "GET",
    headers: { Authorization: authToken },
  });

export const getSubject = (id: number, authToken?: string) =>
  httpClient<Subject>({
    url: `/subjects/${id}`,
    headers: { Authorization: authToken },
  });
