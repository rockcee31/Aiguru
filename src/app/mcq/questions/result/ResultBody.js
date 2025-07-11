'use client'
import { useSelector } from "react-redux";

const ResultBody = () => {
  const ques = useSelector((state) => state.ques.ques);
  const mcq = useSelector((state) => state.mcq.mcq);

  let correct = 0;
  let wrong = 0;
  
  console.log(ques)
  console.log(mcq)

  mcq.forEach((q, index) => {
    if (q.answer === ques[index]) {
      correct += 1;
    } else {
      wrong += 1;
    }
  });

  const total = mcq.length;
  const percentage = total > 0 ? ((correct / total) * 100).toFixed(2) : 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-4 py-8">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Your Quiz Results</h2>
        <div className="text-lg text-gray-700 mb-4">
          <p>Total Questions: <span className="font-semibold">{total}</span></p>
          <p className="text-green-600">Correct Answers: <span className="font-semibold">{correct}</span></p>
          <p className="text-red-600">Wrong Answers: <span className="font-semibold">{wrong}</span></p>
        </div>
        <div className="mt-4">
          <p className="text-xl font-semibold text-blue-600">Score: {percentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default ResultBody;
