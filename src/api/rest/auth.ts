import { FullUser, LoginDto, LoginResp, RegResp, RegistrationDto } from "@/types";
import httpClient from "../httpClient";

export const registration = async (dto: RegistrationDto) => {
  const { data } = await httpClient<RegResp>({
    method: "POST",
    data: dto,
    url: "registration",
  });
  return data;
};

export const login = async (dto: LoginDto) => {
  const { data } = await httpClient<LoginResp>({
    method: "POST",
    data: dto,
    url: "/auth",
  });
  return data;
};

export const getMyUser = async () => {
  const { data } = await httpClient<FullUser>({ url: "/user/me", method: "GET" });
  return data;
};
