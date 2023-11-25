"use client";

import { Card, Flex } from "@radix-ui/themes";
import styled from "styled-components";

export const SubjectCardWrapper = styled(Flex)`
  box-shadow: 6px 0px 30px 0px rgba(126, 138, 149, 0.2);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 150px;
  height: 100% !important;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;

export const ImageContainer = styled.div`
  /* height: 100%; */
  position: relative;

  & > img {
    object-fit: cover;
  }
`;

export const InfoWrapper = styled(Flex)`
  padding: 20px;

  & > button {
    margin-top: auto;
  }
`;
