import { Grid, Heading } from "@radix-ui/themes";
import { NextPage } from "next";
import { LearnLayout } from "./learn.styled";
import SubjectCard from "./components/SubjectCard";
import { Subject } from "@/types";

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

const LearnPage: NextPage = () => {
  return (
    <LearnLayout direction={"column"} gap={"4"}>
      <Heading size={"6"}>Открой мир знаний, открывай себя!</Heading>
      <Grid columns={"3"} gap={"6"}>
        {MOCK.map((subject) => (
          <SubjectCard subject={subject} key={subject.id} />
        ))}
      </Grid>
    </LearnLayout>
  );
};

export default LearnPage;
