"use client";

import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 285px;
  border-radius: 30px;
  background: var(--white-background, #fff);
  box-shadow: 6px 0px 30px 0px rgba(126, 138, 149, 0.2);
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
`;
export const ProfileBlockAvatar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProfileBlock = styled.div`
  margin-bottom: 100px;
`;

export const ModuleBLock = styled.div`
  width: 100%;
  display: inline-flex;
  padding: 47px 48px 50px 42px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  border-radius: 30px;
  background: var(--white-background, #fff);
  box-shadow: 6px 0px 30px 0px rgba(126, 138, 149, 0.2);
`;

export const AchievementBlock = styled.div`
  border-radius: 30px;
  background: var(--white-background, #fff);
  box-shadow: 6px 0px 30px 0px rgba(126, 138, 149, 0.2);
  width: 100%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 20px;
`;
export const AuthTittle = styled.h1`
  color: #000;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 33.75px;
  padding-top: 20px;
`;
