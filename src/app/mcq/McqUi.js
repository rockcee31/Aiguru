
'use client';

import { useState } from 'react';
import { FilePlus, FileQuestionMark, Loader2 } from 'lucide-react';
import axios from 'axios';


import { useDispatch } from 'react-redux';
import { setMcq } from '@/store/slices/mcqSlice';

import { useRouter } from 'next/navigation';


export default function McqUi() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user_id,setuser_id] =  useState("");
  const [generated,setgenerated] = useState(false)
  const [load,setload] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter();


  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleBackendUplaod = async () => {
  if (!file) return alert('Please upload a file first.');

  const formData = new FormData();
  formData.append("file", file);

  setLoading(true); // Start loading immediately before the upload

  try {
    const res = await axios.post("http://localhost:8000/upload", formData);

    console.log("upload response", res.data);
    setuser_id(res.data.user_id);
    setgenerated(true); // Indicate that upload is done and ready to generate
  } catch (error) {
    console.error("Error while uploading file:", error);
    alert("Upload failed.");
  } finally {
    setLoading(false); // Always stop loading once the request is done
  }
};

   
  const handleGenerate = async()=>{
        setload(true)
        try{
         const res = await axios.post("http://localhost:8000/mcq",{
                  user_id: user_id,
                  start_index: 0,
                  count: 10
                  })
        console.log(res)

        dispatch(setMcq({
          mcq:res.data.questions
        }))
  
        
      }catch(err){

      }finally{
         setload(false)
        router.push('/mcq/questions')
      }
        
          
  }
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg p-8 rounded-xl border border-gray-300 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Upload Document to Generate MCQs
        </h1>

        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="w-full h-40 border-2 border-dashed border-orange-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:border-orange-400 transition mb-4"
        >
          <FilePlus size={40} />
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

        {generated?<button
  onClick={handleGenerate}
  className={`w-full py-2 rounded bg-orange-500 hover:bg-orange-600 text-white font-semibold flex items-center justify-center transition ${
    load ? 'opacity-70 cursor-not-allowed' : ''
  }`}
  disabled={load}
>  
  
  {load ? "Generating..." : "Generate"}
</button>:<button
  onClick={handleBackendUplaod}
  className={`w-full py-2 rounded bg-orange-500 hover:bg-orange-600 text-white font-semibold flex items-center justify-center transition ${
    loading ? 'opacity-70 cursor-not-allowed' : ''
  }`}
  disabled={loading}
>  
  
  {loading ? "Uploading..." : "Upload"}
</button>
}
      </div>
    </div>
  );
}
