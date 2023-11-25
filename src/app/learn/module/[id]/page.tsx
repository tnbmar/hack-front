import { getLessons, getModule } from "@/api";
import LeassonCard from "../../components/LessonCard";
import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { cookies } from "next/headers";
import COOKIES from "@/constants/cookie";
import BackBtn from "@/components/BackBtn";

type Props = {
  params: { id: number };
};

const ModulePage = async ({ params }: Props) => {
  const cookiesValues = cookies();
  const token = cookiesValues.get(COOKIES.TOKEN);

  const { data } = await getLessons(params.id, token?.value ?? "");
  const { data: module } = await getModule(params.id, token?.value ?? "");

  return (
    <Flex direction={"column"} gap={"3"} style={{ padding: 20 }}>
      <Flex align={"center"} gap={"2"}>
        <BackBtn />
        <Heading size={"7"}>{module.name}</Heading>
      </Flex>

      <Grid columns={"3"} gap={"3"}>
        {data.map((lesson, i) => (
          <LeassonCard lesson={lesson} key={lesson.id} counter={i + 1} />
        ))}
      </Grid>
    </Flex>
  );
};

export default ModulePage;
