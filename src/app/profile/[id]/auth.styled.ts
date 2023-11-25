"use client";

import styled from "styled-components";

export const ProfileBLock = styled.div`
  width: 882px;
  height: 285px;
  border-radius: 30px;
  background: var(--white-background, #fff);
  /* shadow sidebar */
  box-shadow: 6px 0px 30px 0px rgba(126, 138, 149, 0.2);
  margin-bottom: 40px;
`;
export const ModuleBLock = styled.div`
  width: 882px;
  display: inline-flex;
  padding: 47px 48px 50px 42px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  border-radius: 30px;
  background: var(--white-background, #fff);
  /* shadow sidebar */
  box-shadow: 6px 0px 30px 0px rgba(126, 138, 149, 0.2);
`;
export const AchievementBlock = styled.div`
  border-radius: 30px;
  background: var(--white-background, #fff);
  /* shadow sidebar */
  box-shadow: 6px 0px 30px 0px rgba(126, 138, 149, 0.2);
  width: 500px;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;
export const AuthTittle = styled.h1`
  color: #000;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 33.75px;
  padding-top: 20px;
  text-align: center;
`;
