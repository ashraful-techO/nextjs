import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env";
import { revalidateTag, updateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const API_URL = env.API_URL;

function CreateBlogFormServer() {
  const createBlog = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const tags = formData.get("tags") as string;

    const blogData = {
      title,
      content,
      tags: tags
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
    };

    const cookieStore = await cookies();

    const res = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify(blogData),
    });

    if (res.ok) {
      // revalidateTag("blogPosts", "max");
      updateTag("blogPosts"); // Use either one of them
    }
  };
  return (
    <Card className="max-w-2xl mx-auto ">
      <CardHeader>
        Create Blog
        <CardDescription>You can write your blog here</CardDescription>
      </CardHeader>

      <CardContent>
        <form id="blog-form" action={createBlog}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Blog title"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="content">Content</FieldLabel>
              <Textarea
                name="content"
                id="content"
                placeholder="Write your blog"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="tags">Tags</FieldLabel>
              <Input
                type="text"
                name="tags"
                id="tags"
                placeholder="nextjs, web"
              />
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button form="blog-form" type="submit" className="w-full">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CreateBlogFormServer;
