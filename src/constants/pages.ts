const PAGES = {
  MAIN: "/",
  AUTH: "/auth",
  PROFILE: "/profile",
  LEARN: "/learn",
  SUBJECT: (id: number) => `/learn/subject/${id}`,
} as const;

export default PAGES;
