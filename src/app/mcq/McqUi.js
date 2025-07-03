'use client';
import { useState } from 'react';
// import { FilePlus, Loader2 } from 'lucide-react';

export default function McqUi() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleGenerate = async () => {
    if (!file) return alert('Please upload a file first.');
    setLoading(true);

    // Simulate upload or make API call here
    setTimeout(() => {
      setLoading(false);
      alert("MCQs generated (mock)");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg p-8 rounded-xl border border-gray-300 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Upload Document to Generate MCQs
        </h1>

        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="w-full h-40 border-2 border-dashed border-orange-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:border-orange-400 transition mb-4"
        >
          {/* <FilePlus size={40} /> */}
          <p className="mt-2 text-sm">Drag and drop a PDF or text file here</p>
          <p className="text-xs text-gray-400">(or click to upload below)</p>
        </div>

        <input
          type="file"
          accept=".pdf,.txt"
          onChange={handleFileChange}
          className="mb-4 w-full text-sm border border-gray-300 rounded px-3 py-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-orange-400 file:text-white hover:file:bg-orange-500"
        />

        {file && (
          <div className="text-sm text-gray-700 mb-4">
            <strong>Selected:</strong> {file.name}
          </div>
        )}

        <button
          onClick={handleGenerate}
          className={`w-full py-2 rounded bg-orange-500 hover:bg-orange-600 text-white font-semibold flex items-center justify-center transition ${
            loading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {/* {loading ? (
            <>
              <Loader2 className="animate-spin mr-2" />
              Generating...
            </>
          ) : (
            'Generate MCQs'
          )} */}
        </button>
      </div>
    </div>
  );
}
