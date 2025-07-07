'use client'
import { useSelector } from "react-redux";
const ResultBody = () => {
    const ques = useSelector((state)=> state.ques.ques)
  return (
    <div>ResultBody</div>
  )
}

export default ResultBody