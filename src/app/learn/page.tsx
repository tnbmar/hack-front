import { Grid, Heading } from "@radix-ui/themes";
import { NextPage } from "next";
import { LearnLayout } from "./learn.styled";
import SubjectCard from "./components/SubjectCard";
import { Subject } from "@/types";
import { getSubjects } from "@/api";

import { cookies } from "next/headers";
import COOKIES from "@/constants/cookie";

const LearnPage: NextPage = async () => {
  const cookiesValues = cookies();
  const token = cookiesValues.get(COOKIES.TOKEN);
  const { data } = await getSubjects(token?.value ?? "");

  return (
    <LearnLayout direction={"column"} gap={"4"}>
      <Heading size={"6"}>Открой мир знаний, открывай себя!</Heading>
      <Grid columns={"3"} gap={"6"}>
        {data.results.map((subject, i) => (
          <SubjectCard subject={subject} key={subject.id} order={i + 1} />
        ))}
      </Grid>
    </LearnLayout>
  );
};

export default LearnPage;
