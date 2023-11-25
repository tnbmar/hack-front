"use client";

import { Text } from "@radix-ui/themes";
import { NextPage } from "next";

import { Subject } from "@/types";
import {
  AchievementBlock,
  AuthTittle,
  Container,
  ModuleBLock,
  ProfileBLock,
} from "./auth.styled";
import SubjectCard from "./Components/SubjectCard";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { getSubjects } from "@/api";
import { useUser } from "@/providers/AuthProvider";
=======

const MOCK: Subject[] = [
  {
    name: "Английский язык",
    id: 1,
    // bgImage: "/subject-1.png",
  },
  {
    name: "Программирование",
    id: 2,
    // bgImage: "/subject-2.png",
  },
  {
    name: "Экология",
    id: 3,
    // bgImage: "/subject-3.png",
  },
];
>>>>>>> c1716733286b432297523fb3812ae692f10104da

type Props = {
  params: {
    id: string;
  };
};

const ProfilePage: NextPage<Props> = ({ params }) => {
  const profileId = params.id;

  const [subjects, setSubjects] = useState<Subject[]>();
  const { user } = useUser();

  useEffect(() => {
    getSubjects().then(({ data }) => setSubjects(data.results));
  }, []);

  if (!user) return null;

  return (
    <Container>
      <div>
        <ProfileBLock>
          <AuthTittle>Привет, {user.username}! </AuthTittle>
          <Text>Регистрация: {user.createdAt}</Text>
        </ProfileBLock>
        <ModuleBLock>
          <AuthTittle>Мои предметы</AuthTittle>
          {subjects &&
            subjects.map((subject) => <SubjectCard subject={subject} key={subject.id} />)}
        </ModuleBLock>
      </div>
      <AchievementBlock>
        <AuthTittle> Мои достижения</AuthTittle>
      </AchievementBlock>
    </Container>
  );
};

export default ProfilePage;
