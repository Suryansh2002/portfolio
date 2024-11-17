"use client";
import { Jodit } from 'jodit-react';
import dynamic from 'next/dynamic';
import React, { useState, useMemo, forwardRef } from 'react';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const Example = forwardRef(({ placeholder }: { placeholder: string }, ref:React.ForwardedRef<Jodit>) => {
	const [content, setContent] = useState('');
  console.log(content);

	const config = useMemo(()=>{
    return {
      height:"100vh",
      uploader: { insertImageAsBase64URI: true },
      readonly:false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || 'Start typings...'
    }
  },[placeholder]);


	return (
		<JoditEditor
			ref={ref}
			value={content}
            config={config}
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
	);
});

export default Example;