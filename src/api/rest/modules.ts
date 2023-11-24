import { Module } from "@/types";
import httpClient from "../httpClient";

export const getModules = (id: number, token: string) =>
  httpClient<Module[]>({ url: `/modules/${id}`, headers: { Authorization: token } });

export const getModule = (id: number, token: string) =>
  httpClient<Module>({ url: `/modules/${id}`, headers: { Authorization: token } });
