import CreateBlogFormServer from "@/components/module/user/createBlog/CreateBlogForm";
import CreateBlogFormClient from "@/components/module/user/createBlog/CreateBlogFormClient";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";
import React from "react";

async function CreateBlogPage() {
  const { data } = await blogService.getBlogPost();

  // console.log(data);

  return (
    <div>
      {/* <CreateBlogFormServer /> */}
      <CreateBlogFormClient />
      {data?.data.map((item: BlogPost) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default CreateBlogPage;
