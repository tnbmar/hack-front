"use client";

import Image from "next/image";
import { AuthForm, AuthWrapper, BooksImage } from "./auth.styled";
import { Button, Flex, Heading, Tabs, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { LoginDto, RegistrationDto } from "@/types";
import { login, registration } from "@/api";
import { useRouter } from "next/navigation";
import PAGES from "@/constants/pages";

const AuthPage = () => {
  const { register, handleSubmit } = useForm<RegistrationDto>();
  const router = useRouter();

  const { register: registerLoginForm, handleSubmit: handleSubmitLogin } =
    useForm<LoginDto>();

  const handleRegistration = handleSubmit(async (data) => {
    // const regResp = await registration(data);
    router.push(PAGES.MAIN);
  });

  const handleLogin = handleSubmitLogin(async (data) => {
    // const loginResp = await login(data);
    router.push(PAGES.MAIN);
  });

  return (
    <AuthWrapper>
      <BooksImage>
        <Image alt="books" src="/libs-auth.png" fill />
      </BooksImage>
      <AuthForm onSubmit={(e) => e.preventDefault()}>
        <Flex direction={"column"} gap="4">
          <Heading size={"9"} align={"center"}>
            TNBMAR
          </Heading>
          <Tabs.Root defaultValue="signin">
            <Flex direction={"column"} gap={"2"}>
              <Tabs.List size={"2"}>
                <Tabs.Trigger value="signin">Вход</Tabs.Trigger>
                <Tabs.Trigger value="signup">Регистрация</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="signin">
                <Flex direction={"column"} gap={"4"}>
                  <TextField.Input
                    placeholder="Логин"
                    size={"3"}
                    {...registerLoginForm("username")}
                  />
                  <TextField.Input
                    placeholder="Пароль"
                    size={"3"}
                    {...registerLoginForm("password")}
                  />
                  <Button size={"4"} onClick={handleLogin}>
                    Войти
                  </Button>
                </Flex>
              </Tabs.Content>
              <Tabs.Content value="signup">
                <Flex direction={"column"} gap={"4"}>
                  <TextField.Input
                    placeholder="Логин"
                    size={"3"}
                    {...register("username")}
                  />
                  <TextField.Input
                    placeholder="Почта"
                    size={"3"}
                    type="email"
                    {...register("email")}
                  />
                  <TextField.Input
                    placeholder="Пароль"
                    size={"3"}
                    type="password"
                    {...register("password")}
                  />
                  <TextField.Input
                    placeholder="Подтвердите пароль"
                    size={"3"}
                    type="password"
                  />
                  <Button size={"4"} onClick={handleRegistration}>
                    Регистрация
                  </Button>
                </Flex>
              </Tabs.Content>
            </Flex>
          </Tabs.Root>
        </Flex>
      </AuthForm>
    </AuthWrapper>
  );
};

export default AuthPage;
