import { useState } from 'react';

/**
 * Reusable component for displaying text content with copy functionality
 * @param {string} id - Unique identifier for the text box
 * @param {string} label - Label text displayed above content
 * @param {string} content - Main text content to display and copy
 */
const TextBox = ({ id, label, content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-box">
      <div className="text-box-header">
        <h3>{label}</h3>
        <button
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="text-box-content">
        {content}
      </div>
    </div>
  );
};

export default TextBox;
