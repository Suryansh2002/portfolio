"use client"
import { Delete } from "lucide-react";
import { deleteBlog } from "@/lib/actions";
import toast from "react-hot-toast";
import { isAdmin } from "@/lib/actions";
import { useEffect, useState } from "react";

async function deleteCallback(id:string){
    await toast.promise(deleteBlog(id), {
        loading: 'Deleting...',
        success: 'Deleted',
        error: 'Error deleting'
    });
}

export function BlogDelete({id}:{id:string}){
    const [admin, setAdmin] = useState(false);
    useEffect(()=>{
        isAdmin().then(setAdmin);
    }, []);
    if (!admin){
        return <></>;
    }
    return <button onClick={()=>{deleteCallback(id)}} className="absolute right-4 top-5">
        <Delete size={24} className="text-red-400"/>
    </button>
}