import { NextPage } from "next";
import { Module } from "@/types";
import { Flex, Heading } from "@radix-ui/themes";
import ModuleCard from "../../components/ModuleCard";
import { getModules } from "@/api/rest/modules";
import { cookies } from "next/headers";
import COOKIES from "@/constants/cookie";
import { getSubject } from "@/api";

type ModulesPageProps = {
  params: {
    id: number;
  };
};

const Modules: NextPage<ModulesPageProps> = async (props) => {
  const cookiesValues = cookies();
  const token = cookiesValues.get(COOKIES.TOKEN);
  const { data } = await getModules(props.params.id, token?.value ?? "");
  const { data: subjectsData } = await getSubject(props.params.id, token?.value ?? "");

  console.log({ subjectsData });

  return (
    <Flex direction={"column"} gap={"3"} style={{ padding: "20px" }}>
      <Heading>{subjectsData.name}</Heading>
      <Flex direction={"column"} gap={"3"}>
        {data.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Modules;
