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
];

const LearnPage: NextPage = () => {
  return (
    <LearnLayout direction={"column"}>
      <Heading size={"6"}>
        Открой мир знаний, <br />
        открывай себя!
      </Heading>
      <Grid columns={"3"}>
        {MOCK.map((subject) => (
          <SubjectCard subject={subject} key={subject.id} />
        ))}
      </Grid>
    </LearnLayout>
  );
};

export default LearnPage;
