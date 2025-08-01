"use client";
import { useCallback, useRef, useState } from "react";
import { saveBlog } from "@/lib/actions";
import type { EditorType } from "@/lib/types";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
// import JoditEditor from "@/components/editors/jodit-editor";
// import MDEEditor from "@/components/editors/mde-editor";

const JoditEditor = dynamic(() => import('@/components/editors/jodit-editor'), { ssr: false });
const MDEEditor = dynamic(() => import('@/components/editors/mde-editor'), { ssr: false });

const selected = "bg-white text-blue-700";

async function saveCallback(title:string, content:string, editor:EditorType) {
	const toastId = toast.loading("Saving...");
	const result = await saveBlog(title, content, editor);
	
	if (result){
		return toast.error(result, {id: toastId});
	}
	toast.success("Saved", {id: toastId});
}

export default function Page() {
	const [editor, setEditor] = useState<EditorType>("jodit");
	const contentRef = useRef<{[key in EditorType]:string}>({
		jodit: "",
		markdown: ""
	});
	const titleRef = useRef<string>("");

	const getContent = useCallback((editor:EditorType) => {
		return contentRef.current[editor];
	}, [contentRef]);

	return <div className="flex flex-col h-screen">
		<nav className="flex justify-between p-1">
			<div className="flex-1 flex justify-center">
				<div className="bg-gray-100 flex gap-2 rounded-lg p-1">
					<button onClick={() => setEditor("jodit")} className={`p-2 font-medium text-sm rounded-lg ${editor == "jodit" ? selected:"text-gray-900"}`}>
						Jodit
					</button>
					<button onClick={() => setEditor("markdown")} className={`p-2 font-medium text-sm rounded-lg ${editor == "markdown" ? selected:"text-gray-900"}`}>
						Markdown
					</button>
				</div>
			</div>
			<div className="p-1">
				<button className="text-blue-500 border-blue-400 border hover:bg-blue-100 font-medium p-2 bg-gray-100 rounded-lg" onClick={()=>{
					saveCallback(titleRef.current, contentRef.current[editor], editor);
				}}>
					Save
				</button>
			</div>
		</nav>
		<hr />
		<section className="p-2">
			<h1 className="text-lg">Blog Title</h1>
			<input type="text" name="blog-title" id="blog-title" className="px-1 border border-black rounded-md min-w-60 h-7" onChange={(event)=>{
				titleRef.current = event.target.value
			}}/>
		</section>
		{
			editor == "jodit" 
			&& 
			<JoditEditor 
				getContent={()=>getContent("jodit")}
				setContent={(newContent)=>{
				contentRef.current['jodit'] = newContent;
			}} />
		}
		{
			editor == "markdown" 
			&&
			<MDEEditor 
				getContent={()=>getContent("markdown")} 
				setContent={(newContent)=>{
					contentRef.current['markdown'] = newContent;
			}} />
		}
	</div>
}