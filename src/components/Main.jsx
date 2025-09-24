import React, { useState } from 'react';

const Main = () => {
    const [prompt, setPrompt] = useState('');
    const [htmlOutput, setHtmlOutput] = useState('');
    const [codeReview, setCodeReview] = useState('');

    const generateHTML = (prompt) => {
        // Placeholder for HTML generation logic
        return `<div>${prompt}</div>`;
    };

    const handleGenerate = () => {
        const generatedHTML = generateHTML(prompt);
        setHtmlOutput(generatedHTML);
        setCodeReview('Code review comments go here...');
    };

    const handleReset = () => {
        setPrompt('');
        setHtmlOutput('');
        setCodeReview('');
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <textarea
                className="w-full h-40 p-2 border border-gray-300 rounded"
                placeholder="Enter your prompt here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="flex space-x-4 mt-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={handleGenerate}
                >
                    Generate
                </button>
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
            <div className="mt-4 w-full">
                <h2 className="text-lg font-bold">Live Preview</h2>
                <div className="border border-gray-300 p-4 rounded">
                    <div dangerouslySetInnerHTML={{ __html: htmlOutput }} />
                </div>
            </div>
            <div className="mt-4 w-full">
                <h2 className="text-lg font-bold">Code Review</h2>
                <div className="border border-gray-300 p-4 rounded">
                    {codeReview}
                </div>
            </div>
        </div>
    );
};

export default Main;