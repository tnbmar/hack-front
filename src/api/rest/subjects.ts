import { Subject } from "@/types";
import httpClient from "../httpClient";

export const getSubjects = (authToken?: string) =>
  httpClient<{ results: Subject[] }>({
    url: "/subjects",
    method: "GET",
    headers: { Authorization: authToken },
  });
