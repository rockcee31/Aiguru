'use client'

import Image from "next/image";
import header from "../../../public/header.png";
import { useSelector } from 'react-redux';
import { useState } from "react";
import {useDispatch} from 'react-redux';
import {setPersona} from '../../store/slices/personaSlice'

export default function PersonaBody(){
     const dispatch = useDispatch();
    const [name, setName] = useState('');
const [description, setDescription] = useState('');

    const persona = useSelector((state)=>state.persona)
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    }
    
const handleStart = async()=>{
         if (!name.trim()) return alert("Please enter a name.");
         const personName = toTitleCase(name)
         if (!name.trim()) return alert("Please tell something in about");
         
         try {
            const res = await axios.post("http://localhost:3000/persona", {
            name:personName,
            about:description
      });
          const personaName = res.data.name
          
          
          const about = res.data.about
          
          const image = res.data.image;
          
           dispatch(setPersona({ name: personName, about: about,image:image,setStarted:true })) // Store persona globally
                          // Signal app to go to ChatUI

         } catch (error) {
            console.error(error)
         }
       
    }
    return(
       <div className=' text-white'>
               
       
                   <div className='w-full  '>
                       <div className='flex flex-col items-center justify-end  pt-15'>
                           {/* <img src={img} className='h-20 w-20 mt-2'></img> */}
                           <h1 className='font-bold text-xl'>
                               <span className='text-3xl'>PerSonaTalk</span> – TALK TO FAMOUS PERSONAS</h1>
                           <div className='flex justify-center mx-5 '>
                           <p className='font-semibold text-lg text-center '>PersonaTalk is a Generative AI-powered web application that lets users converse with AI personas of famous people. By combining real-world data from Wikipedia and the powerful capabilities of OpenAI’s GPT model, PersonaTalk creates intelligent, context-aware, and engaging conversations with historical figures, celebrities, scientists, and more — all simulated as if youre chatting directly with them.</p>
                       </div>
       
       
                       </div>
                       
                   </div>
       
                   <div className='min-h-screen w-full   flex justify-around'>
       
                       <div className='h-md w-md relative'> 
                           <Image
        src={header}
        alt="robot"
        fill
        className="object-contain"
      />
                       </div>
                   
       
       
       
       
       
                   <div className='flex  items-center mb-50'>
                       <div className="relative w-full h-fit max-w-xl  p-6 border border-gray-300 rounded-xl shadow-md bg-white">
                           <h1 className="text-2xl font-bold text-center mb-4 whitespace-nowrap text-black">
                               CHAT WITH ANY FAMOUS PERSON 
                           </h1>
       
                           {/* You can later add input fields and chat area here */}
                           <div className='mt-5 '>
                               <fieldset className="fieldset ">
                                   <legend className="fieldset-legend text-black">Type Name of a person you want to chat with</legend>
                                   <input type="text" className="input text-white" placeholder="Type here" 
                                   value={name}
                                   onChange={(e) => setName(e.target.value)} />
       
                               </fieldset>
                           </div>
                           <div className='mt-5 '>
                               <fieldset className="fieldset ">
                                   <legend className="fieldset-legend text-black">Tell Something about the person</legend>
                                   <textarea className="textarea h-24 text-white" placeholder="He is a famous actor?(like this)"
                                   value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
       
                               </fieldset>
                           </div>
       
                           <button className="btn bg-[#FF9900] text-black border-[#e17d00] mt-6" onClick={handleStart}>
                               
                               GET STARTED
                           </button>
                       </div>
                   </div>
       
               </div>
               </div>
    )
}