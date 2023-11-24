const PAGES = {
  MAIN: "/",
  AUTH: "/auth",
  PROFILE: "/profile",
  LEARN: "/learn",
  SUBJECT: (id: number) => `/learn/subject/${id}`,
  MODULE: (id: number) => `/learn/module/${id}`,
  LESSON: (id: number) => `/learn/lesson/${id}`,
} as const;

export default PAGES;
