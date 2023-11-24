import { NextPage } from "next";
import { Module } from "@/types";
import { Flex } from "@radix-ui/themes";
import ModuleCard from "../../components/ModuleCard";
import { getModules } from "@/api/rest/modules";
import { cookies } from "next/headers";
import COOKIES from "@/constants/cookie";

type ModulesPageProps = {
  params: {
    id: number;
  };
};

const Modules: NextPage<ModulesPageProps> = async (props) => {
  const cookiesValues = cookies();
  const token = cookiesValues.get(COOKIES.TOKEN);
  const { data } = await getModules(props.params.id, token?.value ?? "");

  return (
    <>
      <Flex direction={"column"} gap={"3"}>
        {data.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </Flex>
    </>
  );
};

export default Modules;
