"use client";

import { Text } from "@radix-ui/themes";
import { NextPage } from "next";
import { Achievment, ProfileSubject, Subject } from "@/types";

import {
  AchievementBlock,
  AuthTittle,
  Container,
  ModuleBLock,
  ProfileBlock,
  SubjectsWrapper,
} from "./auth.styled";
import SubjectCard from "./Components/SubjectCard";
import { useEffect, useState } from "react";
import { getAchievments, getSubjects } from "@/api";
import { useUser } from "@/providers/AuthProvider";
import SubjectAchievment from "./Components/SubjectAchievment";

const MOCK: ProfileSubject[] = [
  {
    tittle: "Английский язык",
    id: 1,
    bgImage: "/subject-1.png",
  },
  {
    tittle: "Программирование",
    id: 2,
    bgImage: "/subject-2.png",
  },
  {
    tittle: "Экология",
    id: 3,
    bgImage: "/subject-3.png",
  },
];
const ACHIEVE: Achievment[] = [
  {
    id: 1,
    name: "New",
    title: "Добро пожаловать!",
    text: "Просто чтобы порадовать вас",
    status: true,
    img: "/Achieve-1.png",
  },
  {
    id: 2,
    name: "Reward",
    title: "Ваш первый успех!",
    text: "Поздравляем с прохождением первого модуля обучения",
    status: true,
    img: "/Achieve-2.png",
  },
  {
    id: 3,
    name: "Photo",
    title: "Вы фотомодель!",
    text: "Добавьте свое фото в профиль",
    status: false,
    img: "/Achieve-3.png",
  },
  {
    id: 4,
    name: "Most",
    title: "Самый умный!",
    text: "Ответьте на 15 вопросов",
    status: false,
    img: "/Achieve-4.png",
  },
  {
    id: 5,
    name: "King",
    title: "Король знаний",
    text: "Закончите изучение одного предмета",
    status: false,
    img: "/Achieve-5.png",
  },
];
import dayjs from "dayjs";

type Props = {
  params: {
    id: string;
  };
};

const ProfilePage: NextPage<Props> = ({ params }) => {
  const profileId = params.id;

  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [rewards, setRewards] = useState<Achievment[]>([]);
  const { user } = useUser();

  useEffect(() => {
    getSubjects().then(({ data }) => setSubjects(data.results));
    getAchievments().then(({ data }) => setRewards(data.results));
  }, []);

  if (!user) return null;

  return (
    <Container>
      <div>
        <ProfileBlock>
          <AuthTittle>Привет, {user.user.username}! </AuthTittle>
          <Text>Регистрация: {dayjs(user.user.createdAt).format("DD.MM.YYYY")}</Text>
        </ProfileBlock>
        <ModuleBLock>
          <AuthTittle>Мои предметы</AuthTittle>
          <SubjectsWrapper>
            {subjects &&
              subjects.map((subject) => (
                <SubjectCard subject={subject} key={subject.id} />
              ))}
          </SubjectsWrapper>
        </ModuleBLock>
      </div>
      <AchievementBlock>
        <AuthTittle style={{ paddingLeft: "20px" }}> Мои достижения</AuthTittle>
        {ACHIEVE.map((achieve) => (
          <SubjectAchievment myRewards={rewards} subject={achieve} key={achieve.id} />
        ))}
      </AchievementBlock>
    </Container>
  );
};

export default ProfilePage;
