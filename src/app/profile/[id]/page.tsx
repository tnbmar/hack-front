"use client";

import { NextPage } from "next";

type Props = {
  params: {
    id: string;
  };
};

const ProfilePage: NextPage<Props> = ({ params }) => {
  const profileId = params.id;

  return <div>Profile page {profileId}</div>;
};

export default ProfilePage;
