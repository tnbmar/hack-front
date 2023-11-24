import { getLessons, getModule } from "@/api";
import LeassonCard from "../../components/LessonCard";
import { Lesson } from "@/types";
import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { cookies } from "next/headers";
import COOKIES from "@/constants/cookie";

type Props = {
  params: { id: number };
};

const ModulePage = async ({ params }: Props) => {
  const cookiesValues = cookies();
  const token = cookiesValues.get(COOKIES.TOKEN);

  const { data } = await getLessons(params.id, token?.value ?? "");
  const { data: module } = await getModule(params.id, token?.value ?? "");

  console.log({ module });

  return (
    <Flex direction={"column"} gap={"3"}>
      <Flex align={"center"} gap={"2"}>
        <Text>Назад</Text>
        <Heading size={"7"}>Английский - это ключ к миру!</Heading>
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
