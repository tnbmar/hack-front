"use client";

import { Card, Flex } from "@radix-ui/themes";
import styled from "styled-components";

export const SubjectCardWrapper = styled.article`
  box-shadow: 6px 0px 30px 0px rgba(126, 138, 149, 0.2);

  & > div {
    display: grid;
    grid-template-rows: 200px 150px;
    padding: 0 !important;
    height: 100% !important;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const InfoWrapper = styled(Flex)`
  padding: 20px;
`;
