import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { NextPage } from "next";

import { Subject } from "@/types";
import { AchievementBlock, AuthTittle, Container, ModuleBLock, ProfileBLock } from "./auth.styled";
import SubjectCard from "./Components/SubjectCard";

const MOCK: Subject[] = [
  {
    title: "Английский язык",
    description: "Английский - это ключ к миру!",
    id: 1,
    bgImage: "/subject-1.png",
  },
  {
    title: "Программирование",
    description: "Программирование - это код успеха!",
    id: 2,
    bgImage: "/subject-2.png",
  },
  {
    title: "Экология",
    description: "Познавай природу, береги ее!",
    id: 3,
    bgImage: "/subject-3.png",
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
        <ProfileBLock>
          <AuthTittle>Привет, {profileId}! </AuthTittle>
          <Text>Регистрация: {profileId}</Text>
        </ProfileBLock>
        <ModuleBLock>
          <AuthTittle>Мои предметы</AuthTittle>
          {MOCK.map((subject) => (
            <SubjectCard subject={subject} key={subject.id} />
          ))}
        </ModuleBLock>
      </div>
      <AchievementBlock>
        <AuthTittle> Мои достижения</AuthTittle>
      </AchievementBlock>
    </Container>
  );
};

export default ProfilePage;
