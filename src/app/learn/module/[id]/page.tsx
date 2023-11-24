import LeassonCard from "../../components/LessonCard";
import { Lesson } from "@/types";
import { Flex, Grid, Heading, Text } from "@radix-ui/themes";

const LESSON_MOCK: Lesson[] = [
  {
    id: 1,
    answered_count: 1,
    question_count: 8,
    title: "asdnjkansfk",
    lesson_type: "eng",
  },
  {
    id: 2,
    answered_count: 1,
    question_count: 8,
    title: "asdnjkansfk",
    lesson_type: "code",
  },
  {
    id: 3,
    answered_count: 1,
    question_count: 8,
    title: "asdnjkansfk",
    lesson_type: "eco",
  },
  {
    id: 4,
    answered_count: 1,
    question_count: 8,
    title: "asdnjkansfk",
    lesson_type: "code",
  },
  {
    id: 5,
    answered_count: 1,
    question_count: 8,
    title: "asdnjkansfk",
    lesson_type: "eng",
  },
];

const ModulePage = () => {
  return (
    <Flex direction={"column"} gap={"3"}>
      <Flex align={"center"} gap={"2"}>
        <Text>Назад</Text>
        <Heading size={"7"}>Английский - это ключ к миру!</Heading>
      </Flex>

      <Grid columns={"3"} gap={"3"}>
        {LESSON_MOCK.map((lesson, i) => (
          <LeassonCard lesson={lesson} key={lesson.id} counter={i + 1} />
        ))}
      </Grid>
    </Flex>
  );
};

export default ModulePage;
