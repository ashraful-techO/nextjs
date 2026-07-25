import BlogCard from "@/components/module/homepage/BlogCard";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";
import { BlogPost } from "@/types";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Home() {
  // const { data, error } = await userService.getSession();

  const { data } = await blogService.getBlogPost(
    {
      isFeatured: true,
    },
    {
      cache: "no-store",
      revalidate: 10,
    },
  );

  console.log(data?.data);

  return (
    <div className="grid grid-cols-3 mx-auto max-w-7xl gap-3">
      {data?.data?.map((post: BlogPost) => {
        return <BlogCard key={post.id} post={post} />;
      })}
    </div>
  );
}
