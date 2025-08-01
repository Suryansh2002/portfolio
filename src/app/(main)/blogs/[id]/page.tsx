import db from "@/db";
import { MDXRemote }  from 'next-mdx-remote/rsc'
import { BlogDelete } from "@/components/blog/delete-button";


export async function generateStaticParams(){
    const blogs = await db.query.blogs.findMany();
    return blogs.map(blog=>({id:blog.id}));
}

export default async function Page({params:{id}}:{params:{id:string}}){
    const blog = await db.query.blogs.findFirst({
        where:(blog, {eq})=>eq(blog.id, id),
    })
    if (!blog){
        return <section className="text-white p-4">
            <h1 className="text-3xl">
                Blog not found !
            </h1>
        </section>
    }
    return <section className="p-3 md:px-14">
        <div className="bg-gray-800 bg-opacity-65 border border-gray-600 text-white p-4 rounded-lg relative">
            <BlogDelete id={id}/>
            <h1 className="text-3xl">
                {blog.title}
            </h1>
            <hr className="mt-3 mb-4"/>
            <div className="prose prose-invert">
                {blog.editor == "markdown" && <MDXRemote source={blog.content} /> }
                {blog.editor == "jodit" && <div dangerouslySetInnerHTML={{__html: blog.content}} />}
            </div>
        </div>
    </section>
}