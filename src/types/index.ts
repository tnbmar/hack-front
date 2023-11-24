export type RegistrationDto = {
  username: string;
  password: string;
  email: string;
};

export type User = {
  createdAt: string;
  email: string;
  id: number;
  password: string;
  taskCount: number;
  username: string;
};

export type RegResp = {
  token: string;
  user: User;
};

export type LoginDto = {
  username: string;
  password: string;
};

export type LoginResp = RegResp;

export type Subject = {
  id: number;
  name: string;
};

export type Module = {
  // id: number;
  // title: string;
  // question_count: number;
  // answered_count: number;

  id: number;
  name: string;
  subject_id: number;
};

type LessonType = "code" | "eng" | "eco";

export type Lesson = {
  id: number;
  name: string;
  module_id: number;
  // title: string;
  // id: number;
  // question_count: number;
  // answered_count: number;
  // lesson_type: LessonType;
};

type Answer = {
  content: string;
  id: number;

  is_true: true;
  task_id: number;
};

export type Task = {
  answered_id: null;
  answers: Answer[];
  content: string;
  current_answer_id: number;
  id: number;
  lesson_id: number;
};
