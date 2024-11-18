import { Jodit } from 'jodit-react';
import dynamic from 'next/dynamic';
import { useMemo, forwardRef } from 'react';
import "../../app/globals.css";

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

interface EditorProps {
	placeholder?: string;
	getContent: () => string;
	setContent: (content: string) => void;
}

const Editor = forwardRef<Jodit,EditorProps>(({placeholder,getContent,setContent}, ref) => {
	const config = useMemo(()=>{
    return {
      uploader: { insertImageAsBase64URI: true },
      readonly:false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || 'Start typings...'
    }
  },[placeholder]);


	return (
		<JoditEditor
		    ref={ref}
			value={getContent()}
            config={config}
			onChange={setContent}
		/>
	);
});

Editor.displayName = 'JoditEditor';

export default Editor;
