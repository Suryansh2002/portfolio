import dynamic from 'next/dynamic';
import "easymde/dist/easymde.min.css";
import { useMemo } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const SimpleMdeReact = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

interface EditorProps {
    getContent: () => string;
    setContent: (content: string) => void;
};

export default function MarkdownEditor({getContent, setContent}: EditorProps) {
    const customRendererOptions = useMemo(() => {
        return {
            previewRender() {
            const rawHtml = marked(getContent()) as string;
            const cleanHtml = DOMPurify.sanitize(rawHtml);
            return `
            <div class="prose prose-lg max-w-none">
                ${cleanHtml}
            </div>
            `;
          },
        };
      }, [getContent]);

    return <SimpleMdeReact className='flex-1' value={getContent()} onChange={setContent} options={customRendererOptions}/>;
};