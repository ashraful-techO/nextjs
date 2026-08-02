"use client";

import { getBlogs } from "@/actions/blog.action";
import { blogService } from "@/services/blog.service";
import React, { useEffect, useState } from "react";

export default function AboutPage() {
  const [data, setData] = useState();
  const [error, setError] = useState<{ message: string } | null>(null);

  console.log(data);

  useEffect(() => {
    (async () => {
      const { data, error } = await getBlogs();
      setData(data);
      setError(error);
    })();
  }, []);
  return <div className="container mx-auto px-4">aboutPage</div>;
}
