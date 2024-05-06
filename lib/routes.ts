export type RouteType = {
  label: string;
  icon: string;
  path: string;
};
export const routes: RouteType[] = [
  {
    label: "Introduction",
    icon: "/icons/home.svg",
    path: "/",
  },
  {
    label: "Installation",
    icon: "/icons/installation.svg",
    path: "/installation",
  },
  {
    label: "Demo",
    icon: "/icons/demo.svg",
    path: "/demo",
  },
];
