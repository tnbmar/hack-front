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

export type Reward = {
  id: 1;
  name: "New";
};

export type FullUser = {
  user: {
    answeredLessons: Lesson[];
    answeredModules: Module[];
    answeredSubjects: Subject[];
    answeredTasks: Task[];
    createdAt: string;
    email: string;
    id: number;
    password: string;
    rewards: Reward[];
    taskCount: number;
    username: string;
  };
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
  image: string;
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

export type Answer = {
  id: number;
  content: string;
  is_true: true;
  task_id: number;
};

type TaskType = "CODE" | "DRAGABLE" | "DEFAULT";

export type Task = {
  answered_id: null;
  answers: Answer[];
  content: string;
  current_answer_id: null;
  id: number;
  lesson_id: number;
  type: TaskType;
};

export type Achievment = {
  id: number;
  name: string;
  title: string;
  text: string;
  status: boolean;
  img: string;
};

export type MyAchievment = {
  id: number;
  name: string;
};

export type ProfileSubject = {
  tittle: string;
  id: number;
  bgImage: string;
};
