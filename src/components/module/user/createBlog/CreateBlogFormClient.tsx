"use client";
import { createBlogPost } from "@/actions/blog.action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FieldGroup,
  FieldLabel,
  Field,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import React from "react";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 character")
    .max(100, "Title must be within 100 char"),
  content: z
    .string()
    .min(10, "Content must be within 10 char")
    .max(5000, "Content must be with in 5000 char"),
  tags: z.string(),
});

function CreateBlogFormClient() {
  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
      tags: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating");

      const blogData = {
        ...value,
        tags: value.tags
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== ""),
      };

      console.log(blogData);

      try {
        const res = await createBlogPost(blogData);
        console.log(res);

        if (res.error) {
          toast.error(res.error.message, { id: toastId });
          return;
        }

        toast.success("Post created", { id: toastId });
      } catch (error) {
        toast.error("Something went wrong", { id: toastId });
      }
    },
  });
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create a Blog post</CardTitle>
        <CardDescription>Enter the information to create Blog</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="blog-post"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="title"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                    <Input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                      }}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="content"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Content</FieldLabel>
                    <Input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                      }}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="tags"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Tags</FieldLabel>
                    <Input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                      }}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" form="blog-post">
          Post
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CreateBlogFormClient;
