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
import { useEffect, useState } from "react";
import { getSubjects } from "@/api";
import { useUser } from "@/providers/AuthProvider";

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
