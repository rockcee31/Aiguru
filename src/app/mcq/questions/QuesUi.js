'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setQues } from '@/store/slices/quesSlice';
import { useRouter } from 'next/navigation';
const QuesUi = () => {
  const mcqs = useSelector((state) => state.mcq.mcq);
  const [selectedOptions,setselectedOption] = useState({

})
const dispatch  = useDispatch()
const router = useRouter()
const setoption = (index,answer)=>{
  setselectedOption((prev)=>({
    ...prev,
    [index]:answer

  }))
}

const handleSubmit = ()=>{
  
dispatch(setQues({
          ques:selectedOptions
        }))

router.push('/mcq/questions/result')
}
  return (
    <div className="min-h-screen px-4 py-6 ">
      <div className='text-center text-orange-500 text-2xl font-bold pb-5'><h1>MCQs BASED ON YOUR DOCUMENT</h1></div>
      {mcqs && mcqs.length > 0 ? (
        mcqs.map((mcq, index) => (
          <div key={index} className="mcq-container mb-8 p-4 border rounded shadow">
            <div className="question mb-2">
              <p className="font-semibold">{`Q${index + 1}. ${mcq.question}`}</p>
            </div>
            <div className="options space-y-2">
              {Object.entries(mcq.options)
              .map(([key, optionValue]) => (
                <label key={key} className="option flex items-center space-x-2">
                  <input type="radio" name={`q${index}`} value={key} onChange={(e)=> setoption(index,e.target.value)} className="radio" />
                  <span>{`${key}. ${optionValue}`}</span>
                </label>
              ))}
            </div>
            
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No questions available. Please generate MCQs first.</p>
      )}
      <button className="mt-3 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded"  onClick={handleSubmit}>
              Submit
            </button>
    </div>
  );
};

export default QuesUi;



