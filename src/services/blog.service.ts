import { env } from "@/env";
import { error } from "console";
import next from "next";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

interface GetBlogsParams {
  isFeatured?: boolean;
  search?: string;
}

interface BlogData {
  title: string;
  content: string;
  tags: string[];
}

export const blogService = {
  getBlogPost: async function (
    params?: GetBlogsParams,
    options?: ServiceOptions,
  ) {
    try {
      const url = new URL(`${API_URL}/posts`);

      // url.searchParams.append("key", "Value");

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }

      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options?.cache;
      }

      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }

      config.next = { ...config.next, tags: ["blogPosts"] };
      // console.log(url.toString());

      //  const res = await fetch(url.toString(), {
      //    next: {
      //      tags: ["blogPosts"],
      //    },
      //  });

      const res = await fetch(url.toString(), config);
      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },

  getBlogById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/posts/${id}`);

      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: "something went wrong" };
    }
  },

  createBlogPost: async (blogData: BlogData) => {
    try {
      const cookieStore = await cookies();

      const rest = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(blogData),
      });

      const data = await rest.json();
      if (data.error) {
        return {
          data: null,
          error: { message: data.error.message || "Error: Post not created" },
        };
      }

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "something went wrong" } };
    }
  },
};
