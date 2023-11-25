import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { NextPage } from "next";
import Image from "next/image";
import { Achievment, ProfileSubject, Subject } from "@/types";
import {
  AchievementBlock,
  AuthTittle,
  Container,
  ModuleBLock,
  ProfileBlock,
  ProfileBlockAvatar,
  ProfileContainer,
} from "./auth.styled";
import SubjectCard from "./Components/SubjectCard";
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
    title: "Добро пожаловать!",
    text: "Просто чтобы порадовать вас",
    status: true,
    img: "/Achieve-1.png",
  },
  {
    id: 2,
    title: "Ваш первый успех!",
    text: "Поздравляем с прохождением первого модуля обучения",
    status: true,
    img: "/Achieve-2.png",
  },
  {
    id: 3,
    title: "Вы фотомодель!",
    text: "Добавьте свое фото в профиль",
    status: true,
    img: "/Achieve-3.png",
  },
  {
    id: 4,
    title: "Самый умный!",
    text: "Ответьте на 15 вопросов",
    status: true,
    img: "/Achieve-4.png",
  },
  {
    id: 5,
    title: "Король знаний",
    text: "Закончите изучение одного предмета",
    status: true,
    img: "/Achieve-5.png",
  },
];

type Props = {
  params: {
    id: string;
  };
};

const ProfilePage: NextPage<Props> = ({ params }) => {
  const profileId = params.id;

  return (
    <Container>
      <div>
        <ProfileContainer>
          <ProfileBlockAvatar>
            <Image src="/Avatar.png" alt="user" width={200} height={200} style={{ borderRadius: "50%", margin: "" }} />
          </ProfileBlockAvatar>
          <ProfileBlock>
            <AuthTittle>Привет, {profileId}! </AuthTittle>
            <Text>Регистрация: {profileId}</Text>
          </ProfileBlock>
        </ProfileContainer>
        <ModuleBLock>
          <AuthTittle>Мои предметы</AuthTittle>
          {MOCK.map((subject) => (
            <SubjectCard subject={subject} key={subject.id} />
          ))}
        </ModuleBLock>
      </div>
      <AchievementBlock>
        <AuthTittle> Мои достижения</AuthTittle>
        {ACHIEVE.map((achieve) => (
          <SubjectAchievment subject={achieve} key={achieve.id} />
        ))}
      </AchievementBlock>
    </Container>
  );
};

export default ProfilePage;
