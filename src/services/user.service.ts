import { cookies } from "next/headers";
import { env } from "@/env";

const AUTH_URL = env.AUTH_API;

export const userService = {
  getSession: async function () {
    try {
      const cookieStrore = await cookies();

      const data = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStrore.toString(),
        },
        cache: "no-store",
      });

      const session = await data.json();
      //   console.log({ session });
      return { data: session, error: null };
    } catch (error) {
      console.log(error);
      return { data: null, error: { message: "something went wrong" } };
    }
  },
};
