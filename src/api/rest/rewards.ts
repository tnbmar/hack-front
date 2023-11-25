import { Achievment } from "@/types";
import httpClient from "../httpClient";

export const getAchievments = (authToken?: string) =>
  httpClient<{ results: Achievment[] }>({
    url: "/rewards",
    method: "GET",
    headers: { Authorization: authToken },
  });
