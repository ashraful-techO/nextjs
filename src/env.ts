import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
  server: {
    BACKEND_API: z.url(),
    FRONTEND_URL: z.url(),
    AUTH_API: z.url(),
    API_URL: z.url(),
  },

  client: {
    NEXT_PUBLIC_TEST: z.string(),
  },

  runtimeEnv: {
    BACKEND_API: process.env.BACKEND_API,
    FRONTEND_URL: process.env.FRONTEND_URL,
    AUTH_API: process.env.AUTH_API,
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST,
  },
});
