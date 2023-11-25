"use client";

import Image from "next/image";
import { AuthForm, AuthWrapper, BooksImage } from "./auth.styled";
import { Button, Flex, Heading, Tabs, Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { LoginDto, RegistrationDto } from "@/types";
import { login, registration } from "@/api";
import { useRouter } from "next/navigation";
import PAGES from "@/constants/pages";
import Cookies from "js-cookie";
import COOKIES from "@/constants/cookie";

const AuthPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationDto & { confirmPassword: string }>();
  const router = useRouter();

  const {
    register: registerLoginForm,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
  } = useForm<LoginDto>();

  const handleRegistration = handleSubmit(async (data) => {
    try {
      const regResp = await registration(data);
      Cookies.set(COOKIES.TOKEN, regResp.token);
      router.push(PAGES.MAIN);
    } catch (e) {
      console.log({ e });
    }
  });

  const handleLogin = handleSubmitLogin(async (data) => {
    try {
      const loginResp = await login(data);
      Cookies.set(COOKIES.TOKEN, loginResp.token);
      router.push(PAGES.MAIN);
    } catch (e) {
      console.log({ e });
    }
  });

  return (
    <AuthWrapper>
      <BooksImage>
        <Image alt="books" src="/libs-auth.svg" fill />
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
                    {...registerLoginForm("username", { required: true })}
                  />
                  {errorsLogin.username && <Text color="red">Логин обязателен</Text>}
                  <TextField.Input
                    placeholder="Пароль"
                    size={"3"}
                    type="password"
                    {...registerLoginForm("password", { required: true })}
                  />
                  {errorsLogin.password && <Text color="red">Пароль обязателен</Text>}

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
                    {...register("username", { required: true })}
                  />
                  {errors.username && <Text color="red">Логин обязателен</Text>}

                  <TextField.Input
                    placeholder="Почта"
                    size={"3"}
                    type="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <Text color="red">Почта обязательна</Text>}

                  <TextField.Input
                    placeholder="Пароль"
                    size={"3"}
                    type="password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && <Text color="red">Пароль обязателен</Text>}

                  <TextField.Input
                    placeholder="Подтвердите пароль"
                    size={"3"}
                    type="password"
                    {...register("confirmPassword", { required: true })}
                  />
                  {errors.confirmPassword && (
                    <Text color="red">Подтвердите пароль обязателен</Text>
                  )}
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
