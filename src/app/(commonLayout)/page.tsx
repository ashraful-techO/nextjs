import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { userService } from "@/services/user.service";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Home() {
  // const { data, error } = await userService.getSession();

  // console.log({ data });

  return (
    <div className="container mx-auto px-4">
      <h1>Hello World</h1>
      <Button>Click me</Button>
    </div>
  );
}
