"use client";

import { Card, Flex } from "@radix-ui/themes";
import styled from "styled-components";

export const SubjectCardWrapper = styled(Flex)`
  box-shadow: 6px 0px 30px 0px rgba(126, 138, 149, 0.2);
  height: 152px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  & > div:first-child {
    background-color: red;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  min-width: 234px;
  min-height: 152px;

  & > img {
    object-fit: cover;
  }
`;

export const InfoWrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;
export const StyledButton = styled.button`
  border-radius: 32px;
  background: #f72585;
  max-width: 170px;
  max-height: 50px;
  padding: 10px 30px;

  color: white;
`;
