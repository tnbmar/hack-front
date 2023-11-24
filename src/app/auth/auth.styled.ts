"use client";

import { Flex } from "@radix-ui/themes";
import styled from "styled-components";

export const AuthWrapper = styled.div`
  position: relative;
  background-color: #c1d5f6;
  height: 100vh;
  display: flex;
`;

export const BooksImage = styled.div`
  width: 640px;
  height: 505px;
  position: relative;
  bottom: 0;
  align-self: flex-end;
`;

export const AuthForm = styled.form`
  background-color: #fff;
  height: 100%;
  flex-grow: 1;
  border-radius: 100px 0 0 100px;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    max-width: 400px;
    width: 100%;
  }
`;
