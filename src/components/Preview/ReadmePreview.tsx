import React from 'react';
import { UserProfile } from '../../types';
import { generateReadme } from '../../utils/readmeGenerator';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface ReadmePreviewProps {
  profile: UserProfile;
}

const ReadmePreview: React.FC<ReadmePreviewProps> = ({ profile }) => {
  const readmeContent = generateReadme(profile);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Preview</h2>
      <div className="border rounded-lg overflow-hidden">
        <SyntaxHighlighter
          language="markdown"
          style={githubGist}
          className="!m-0"
          showLineNumbers
        >
          {readmeContent}
        </SyntaxHighlighter>
      </div>
      <button
        onClick={() => navigator.clipboard.writeText(readmeContent)}
        className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
      >
        Copy to Clipboard
      </button>
    </div>
  );
};

export default ReadmePreview;