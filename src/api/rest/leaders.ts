import { Leader } from "@/types";
import httpClient from "../httpClient";

export const getLeaders = (authToken?: string) =>
  httpClient<{ results: Leader[] }>({
    url: "/leaders",
    method: "GET",
    headers: { Authorization: authToken },
  });
