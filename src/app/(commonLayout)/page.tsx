import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default async function Home() {
  const getSession = await authClient.getSession();

  console.log({ getSession });
  return (
    <div className="container mx-auto px-4">
      <h1>Hello World</h1>
      <Button>Click me</Button>
    </div>
  );
}
