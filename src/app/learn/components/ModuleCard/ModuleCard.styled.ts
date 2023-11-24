"use client";

import { Flex } from "@radix-ui/themes";
import styled from "styled-components";

export const ModuleCardTemplate = styled(Flex)`
  padding: 20px;
  box-shadow: 6px 0px 30px 0px rgba(126, 138, 149, 0.2);
  border-radius: 20px;
`;

export const ProgressBar = styled.div`
  position: relative;
  overflow: hidden;
  background: var(--black-a9);
  border-radius: 99999px;
  width: 300px;
  height: 25px;
`;
