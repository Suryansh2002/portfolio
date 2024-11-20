import db from "@/db";
import { BlogCard } from "@/components/blog/blog-card";

export default async function Page(){
  const data = await db.query.blogs.findMany();
  return <div className="text-white grid md:grid-cols-3 grid-cols-1 gap-6 items-center p-6 md:px-64">
    {
      data.map((blog, index)=>(
        <BlogCard key={blog.id + index} {...{id:blog.id, title:blog.title, content:blog.content, timestamp:blog.timestamp}}/>
      ))
    }
  </div>
}