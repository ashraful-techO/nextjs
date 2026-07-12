import { Route } from "@/types";

export const adminRoutes: Route[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Analytics",
        url: "/analytics",
        isActive: true,
      },
    ],
  },
    {
    title: "🏠",
    items:[
      {
        title: "Test",
        url: "/test",
        isActive: true,
      }
    ]
  }
];
