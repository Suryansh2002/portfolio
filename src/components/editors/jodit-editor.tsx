import { Jodit } from 'jodit-react';
import dynamic from 'next/dynamic';
import { useMemo, forwardRef, useState } from 'react';
import "../../app/globals.css";
import { LanguageInput } from './language-input';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

interface EditorProps {
	placeholder?: string;
	getContent: () => string;
	setContent: (content: string) => void;
}

const Editor = forwardRef<Jodit,EditorProps>(({placeholder,getContent,setContent}, ref) => {
	const [tempEditor, setTempEditor] = useState<any>(null);
	const config = useMemo(()=>{
		return {
			uploader: { insertImageAsBase64URI: true },
			readonly: false,
			placeholder: placeholder || 'Start typings...',
			buttons: [
				...Jodit.defaultOptions.buttons,
				{
					name: 'insertCode',
					exec: (editor: Jodit) => {
						setTempEditor(editor);
					}
				}
			]
		}
  	},[placeholder]);

	return <div className='flex flex-1'>
		{tempEditor && <LanguageInput editor={tempEditor} setEditor={setTempEditor} />}
		<JoditEditor
			ref={ref}
			value={getContent()}
			config={config}
			onChange={setContent}
		/>
	</div>
});

Editor.displayName = 'JoditEditor';

export default Editor;
