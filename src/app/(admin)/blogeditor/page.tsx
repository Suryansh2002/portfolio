"use client";
import { useCallback, useRef, useState } from "react";
import JoditEditor from "@/components/editors/jodit-editor";
import MDEEditor from "@/components/editors/mde-editor";

type EditorType = "jodit"|"markdown";
const selected = "bg-white text-blue-700";

function SaveCallback(content:string) {
	alert(content);
}

export default function Page() {
	const [editor, setEditor] = useState<EditorType>("jodit");
	const contentRef = useRef<{[key in EditorType]:string}>({
		jodit: "",
		markdown: ""
	});

	const getContent = useCallback((editor:EditorType) => {
		return contentRef.current[editor];
	}, []);

	return <div className="flex flex-col h-screen">
		<div className="flex justify-between p-1">
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
					SaveCallback(contentRef.current[editor]);
				}}>
					Save
				</button>
			</div>
		</div>
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