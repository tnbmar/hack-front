"use client";

import { Flex, Text } from "@radix-ui/themes";
import styled from "styled-components";

export const LessonCard = styled.div`
  padding: 20px;
  border-radius: 20px;
  background-color: #a9a6ed;
  position: relative;
  color: #fff;
  height: 300px;
  box-shadow: 6px 0px 30px 0px rgba(126, 138, 149, 0.6);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  cursor: pointer;
`;

export const OrderNumber = styled(Text)`
  position: absolute;
  font-size: 320px;
  color: #fff;
  bottom: 0;
  line-height: 65%;
  left: 0;
`;

export const TextWrapper = styled(Flex)``;
