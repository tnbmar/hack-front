const PAGES = {
  MAIN: "/",
  AUTH: "/auth",
  PROFILE: (id: number) => `/profile${id}`,
} as const;
