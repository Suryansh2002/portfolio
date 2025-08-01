import { Jodit } from 'jodit-react';
import { X } from 'lucide-react';
import { useRef } from 'react';
import Prism from 'prismjs';


export function LanguageInput({editor, setEditor}:{editor:Jodit, setEditor: (editor: Jodit | null) => void}){
    const contentRef = useRef<string>('');
    const languageRef = useRef<string>('');
    return <div className='fixed top-0 z-10 h-screen w-screen backdrop-blur-md flex items-center justify-center'>
        <div className='h-96 w-96 border-2 border-black rounded-md absolute flex flex-col gap-2 p-2'>
            <button className='absolute top-2 right-2 text-red-500' onClick={() => setEditor(null)}>
                <X className='h-4 w-4' />
            </button>
            <input type="text" className='w-40 focus:outline-none border border-black rounded-md px-1' 
                placeholder='Enter your language' 
                onChange={(e) => {languageRef.current = e.target.value}}
            />
            <textarea className='flex-1 focus:outline-none border border-black rounded-md px-1'
                placeholder='Enter your code here...' 
                onChange={(e)=>{contentRef.current = e.target.value}}
            />
            <button className='bg-green-500 text-white rounded-md px-2 py-1 w-28' onClick={() => {
                editor.selection.insertHTML(
                    Prism.highlight(contentRef.current, Prism.languages[languageRef.current] || Prism.languages.plain, languageRef.current)
                );
                setEditor(null);
            }}>
                Insert Code
            </button>
        </div>
    </div>
}