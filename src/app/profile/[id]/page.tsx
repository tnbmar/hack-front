"use client";

import { Text } from "@radix-ui/themes";
import { NextPage } from "next";
import Image from "next/image";
import { Achievment, ProfileSubject, Subject } from "@/types";

import {
  AchievementBlock,
  AuthTittle,
  Container,
  ModuleBLock,
  ProfileBlock,
} from "./auth.styled";
import SubjectCard from "./Components/SubjectCard";
import { useEffect, useState } from "react";
import { getAchievments, getSubjects } from "@/api";
import { useUser } from "@/providers/AuthProvider";
import SubjectAchievment from "./Components/SubjectAchievment";
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
          {subjects &&
            subjects.map((subject) => <SubjectCard subject={subject} key={subject.id} />)}
        </ModuleBLock>
      </div>
      <AchievementBlock>
        <AuthTittle> Мои достижения</AuthTittle>
        {rewards.map((achieve) => (
          <SubjectAchievment subject={achieve} key={achieve.id} />
        ))}
      </AchievementBlock>
    </Container>
  );
};

export default ProfilePage;
