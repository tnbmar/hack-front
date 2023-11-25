const PAGES = {
  MAIN: "/",
  AUTH: "/auth",
  LEARN: "/learn",
  PROFILE: (id: number) => `/profile/${id}`,
  SUBJECT: (id: number) => `/learn/subject/${id}`,
  MODULE: (id: number) => `/learn/module/${id}`,
  LESSON: (id: number) => `/learn/lesson/${id}`,
} as const;

export default PAGES;
