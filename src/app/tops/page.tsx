"use client";

import { NextPage } from "next";
import { Achievment, Leader, ProfileSubject, Subject } from "@/types";

import {
  AchievementBlock,
  AuthTittle,
  Container,
  LTable,
  Ltd,
  LtdContent,
  Lth,
  ModuleBLock,
  ProfileBlock,
  ProfileContent,
  SubjectsWrapper,
} from "./tops.styled";
import { useEffect, useState } from "react";
import { getLeaders } from "@/api";
import { useUser } from "@/providers/AuthProvider";

import dayjs from "dayjs";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

const ProfilePage: NextPage<Props> = ({ params }) => {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const { user } = useUser();

  useEffect(() => {
    getLeaders().then(({ data }) => setLeaders(data.results));
  }, []);

  if (!user) return null;

  return (
    <Container>
      <ModuleBLock>
        <AuthTittle>Вместе мы сила, топ учеников!</AuthTittle>
        <LTable>
          <thead>
            <Lth>Место</Lth>
            <Lth>Ученик</Lth>
            <Lth>Рейтинг</Lth>
          </thead>
          <tbody>
            {leaders.map((elem, index) => {
              return (
                <tr key={elem.id}>
                  <Ltd>{index + 1}</Ltd>
                  <Ltd>
                    <LtdContent>
                      <Image
                        src="/Avatar.png"
                        width={50}
                        height={50}
                        alt=""
                        style={{ borderRadius: "50%" }}
                      />
                      <p>{elem.username}</p>
                    </LtdContent>
                  </Ltd>
                  <Ltd>
                    {elem.taskCount
                      ? Number(
                          Math.ceil(elem.answeredTasks.length * 100) / elem.taskCount
                        ).toFixed(0)
                      : "-"}
                    {elem.taskCount ? "%" : ""}
                  </Ltd>
                </tr>
              );
            })}
          </tbody>
        </LTable>
      </ModuleBLock>
    </Container>
  );
};

export default ProfilePage;
