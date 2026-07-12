import { Route } from "@/types";

export const userRoutes : Route[] = [
  {
    title: "Blog Management",
    items: [
      {
        title: "Create Blog",
        url: "/create-blog",
        isActive: true,
      },
    ],
  },
    {
    title: "🏠",
    items:[
      {
        title: "Home",
        url: "/",
        isActive: true,
      },
      {
        title: "Test",
        url: "/test",
        isActive: true,
      }
    ]
  }
];
