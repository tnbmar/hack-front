export type RegistrationDto = {
  username: string;
  password: string;
  email: string;
};

export type RegResp = boolean;

export type LoginDto = {
  username: string;
  password: string;
};

export type LoginResp = {};

export type Subject = {
  id: number;
  title: string;
  description: string;
  bgImage: string;
};

export type Module = {
  id: number;
  title: string;
  question_count: number;
  answered_count: number;
};
