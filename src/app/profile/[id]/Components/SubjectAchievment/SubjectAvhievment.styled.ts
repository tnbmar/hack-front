"use client";

import { Card, Flex } from "@radix-ui/themes";
import styled from "styled-components";

export const AchieveContainer = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
  width: 100%;
`;
export const AchieveBlock = styled.div`
  display: flex;
  height: 138px;
  width: 100%;
  margin: 50px 0px 20px 20px;
`;
export const AchieveImageBLock = styled.div`
  width: 117px;
  height: 138px;
  position: relative;
  object-fit: cover;
  margin-right: 24px;
`;
export const Title = styled.h1`
  color: #000;
  font-size: 24px;
  font-weight: 600;
  line-height: 33.75px; /* 140.625% */
  letter-spacing: 0.96px;
`;
export const SubTitle = styled.h1`
  color: var(--, #b8b8b8);
  font-size: 15px;
  font-weight: 400;
  line-height: 25px; /* 119.048% */
`;
