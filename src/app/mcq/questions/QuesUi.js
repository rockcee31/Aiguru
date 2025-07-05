'use client';

import { useSelector } from 'react-redux';

const QuesUi = () => {
  const mcqs = useSelector((state) => state.mcq.mcq);

  return (
    <div className="min-h-screen px-4 py-6">
      {mcqs && mcqs.length > 0 ? (
        mcqs.map((mcq, index) => (
          <div key={index} className="mcq-container mb-8 p-4 border rounded shadow">
            <div className="question mb-2">
              <p className="font-semibold">{`Q${index + 1}. ${mcq.question}`}</p>
            </div>
            <div className="options space-y-2">
              {Object.entries(mcq.options).map(([key, optionValue]) => (
                <label key={key} className="option flex items-center space-x-2">
                  <input type="radio" name={`q${index}`} value={key} className="radio" />
                  <span>{`${key}. ${optionValue}`}</span>
                </label>
              ))}
            </div>
            <button className="mt-3 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded">
              Submit
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No questions available. Please generate MCQs first.</p>
      )}
    </div>
  );
};

export default QuesUi;



// 'use client';

// import { useSelector } from "react-redux";
// import { useState } from "react";

// const QuesUi = () => {
//   const mcqs = useSelector((state) => state.mcq.mcq);
//   const [visibleCount, setVisibleCount] = useState(5); // Show 5 questions initially

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => prev + 5);
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Generated MCQs</h2>

//       {mcqs.slice(0, visibleCount).map((mcq, index) => (
//         <div key={index} className="mb-6 p-4 border rounded shadow">
//           <div className="mb-2 font-medium">
//             {index + 1}. {mcq.question}
//           </div>
//           <div className="space-y-2">
//             {Object.entries(mcq.options).map(([key, value]) => (
//               <label key={key} className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name={`question-${index}`}
//                   value={key}
//                   className="radio"
//                 />
//                 <span>{key}. {value}</span>
//               </label>
//             ))}
//           </div>
//           <button className="mt-3 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
//             Submit
//           </button>
//         </div>
//       ))}

//       {visibleCount < mcqs.length && (
//         <button
//           onClick={handleLoadMore}
//           className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//         >
//           Load More Questions
//         </button>
//       )}
//     </div>
//   );
// };

// export default QuesUi;
