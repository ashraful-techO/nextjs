import HistoryTable from "@/components/module/user/history/historyTable";
import { blogService } from "@/services/blog.service";

export default async function HistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  console.log(page);

  const response = await blogService.getBlogPost({
    page,
  });

  const posts = response.data?.data || [];
  // console.log(posts);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Blog post history</h1>
      <HistoryTable posts={posts} />
    </div>
  );
}
