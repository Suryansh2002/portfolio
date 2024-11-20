import markdownToTxt from "markdown-to-txt";
import Link from "next/link";
import {Clock, BookOpenText} from "lucide-react"
function calculateReadTime(content:string){
  const words = content.split(" ");
  const readTime = Math.ceil(words.length/200);
  return readTime + " min read";
}

export function BlogCard({id, title, content, timestamp}:{id:string, title:string, content:string, timestamp:Date}){
    return <div className="flex items-center justify-center">
      <Link className={`
        relative
        p-4 rounded-lg w-96 border border-gray-600
        bg-gray-950 hover:bg-gradient-to-b hover:from-gray-900 hover:via-gray-950 hover:to-gray-950
        hover:shadow-lg hover:shadow-gray-900
        `
      } href={`blogs/${id}`}>
        <h1 className="text-xl">{title}</h1>
        <hr className="my-2 border-gray-300"/>
        <p>
          {markdownToTxt(content.slice(0, 100))}
        </p>
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-blue-600"/>
            <span className="text-sm">{calculateReadTime(content)}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpenText size={16} className="text-green-600"/>
            <span className="text-sm">{timestamp.toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
    </div>
}